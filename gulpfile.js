var gulp = require('gulp');
//yargs is used for passing argument strings and argv is an array of options
var args = require('yargs').argv;
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
// var del = require('del');
var config = require('./gulp.config.js')();
var port = process.env.PORT || config.defaultPort;

//check dev dependencies in package.json to remember which plugins are being used
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('copy-bower-components-dev', function() {
	gulp.src(['./bower_components/**/*.min.*', './lib/**/*.min.*'])
		.pipe(gulp.dest('./public/vendor'));
});

gulp.task('copy-app-dev', function() {
	gulp.src(config.appjs)
		.pipe(gulp.dest('./public/app'));
});

gulp.task('copy-templates-dev', function() {
	gulp.src(config.apphtml)
		.pipe(gulp.dest('./public/app'));
});

gulp.task('copy-index-dev', function() {
	gulp.src(config.index)
		.pipe(gulp.dest('./public'));
});

gulp.task('check-js', function() {
	log('Analyzing HS files with JSHint and JSCS');

	return gulp
        .src(config.alljs)
 // run gulp check-js --verbose to print out all the files that gulp is running
		.pipe($.if(args.verbose, $.print()))
		.pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {
            verbose: true
        }))
   		.pipe($.jshint.reporter('fail'));
});

gulp.task('styles', function() {
	log('Compiling Sass --> CSS');
	return gulp
		.src(config.sass)
		.pipe($.sass())
		.pipe($.autoprefixer({ browsers: ['last 2 version', '> 5%']}))
		.pipe(gulp.dest(config.publicStyles));
});

gulp.task('watch', function() {
	gulp.watch([config.appjs], ['check-js', 'dev']).on('change', browserSync.reload);
	gulp.watch([config.apphtml], ['dev']).on('change', browserSync.reload);
	gulp.watch([config.index], ['dev']).on('change', browserSync.reload);
	gulp.watch([config.nodeServer], ['check-js', 'dev']).on('change', browserSync.reload);
	gulp.watch([config.sass], ['styles', 'dev']).on('change', browserSync.reload);
});



gulp.task('serve-dev', ['watch'], function() {

	var nodeOptions = {
		script: config.nodeServer,
		delayTime: 1,
		env: {
			'PORT': port
		},
		watch: [config.nodeServer]
	};

	return $.nodemon (nodeOptions)
		.on('restart', ['check-js'], function(ev) {
			log('*** nodemon restarted');
			log('files changed on restart:\n' + ev);
			setTimeout(function() {
				browserSync.notify('reloading now ....');
				browserSync.reload({stream: false});
			}, 1000);
		})
		.on('start', function() {
			log('*** nodemon started');
			startBrowserSync();
		})
		.on('crash', function() {
			log('*** nodemon crashed: script crashed for some reason');
		})
		.on('exit', function() {
			log('*** nodemon exited cleanly');
		});
});


function startBrowserSync() {
	if(args.nosync || browserSync.active) {
		return;
	}

	log('Starting browser-sync on port ' + port);

	var options = {
		proxy: 'localhost:' + port,
		port: 7000,
		files: [
			config.publicFolder + '**/*.*',
			config.publicStyles + 'styles.css',
			config.endpoints + '**/*.*'
		],
		ghostMode: {
			clicks: true,
			location: false,
			forms: true,
			scroll: true
		},
		injectChanges: true,
		logFileChanges: true,
		logLevel: 'debug',
		logPrefix: 'playlist-app',
		notify: true,
		reloadDelay: 1000
	};

	browserSync(options);
}


gulp.task('dev', function(callback) {
	return runSequence(
		'copy-bower-components-dev',
		'copy-app-dev',
		'copy-index-dev',
		'copy-templates-dev',
		'serve-dev',
		callback
	);
});




function log(msg) {
	if (typeof(msg) === 'object') {
		for (var item in msg) {
			if (msg.hasOwnProperty(item)) {
				$.util.log($.util.colors.blue(msg[item]));
			}
		}
	} else {
		$.util.log($.util.colors.blue(msg));
	}
}
