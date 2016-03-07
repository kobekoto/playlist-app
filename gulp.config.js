// This file helps keep our gulpfile a little bit cleaner!

module.exports = function() {
    var src = 'src/';
    var publicFolder = 'public/';

    var config = {
        publicFolder: publicFolder,
        appjs: [
            src + 'app/**/*.js'
        ],
        apphtml: src + 'app/**/*.html',        
        // all js to check
        alljs: './*.js',

        css: publicFolder + 'styles.css',
        index: src + 'index.html',
        publicStyles: publicFolder + 'styles/',
        sass: './src/styles/**/*.scss',

        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../'
        },

        defaultPort: 7000,
        nodeServer: 'server.js'

    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };


    return config;
};
