// File all

module.exports = function() {
    var src = 'src/';
    var publicFolder = 'public/';

    var config = {
        publicFolder: publicFolder,
        appjs: [
            src + 'app/**/*.js'
        ],
        
        // all js to check
        alljs: [
            './src/**/*.js',
            './*.js'
        ],

        css: publicFolder + 'styles.css',
        publicStyles: publicFolder + 'styles/',
        sass: './src/styles/**/*.scss'
        
    return config;
};
