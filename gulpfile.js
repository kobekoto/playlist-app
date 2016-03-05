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

