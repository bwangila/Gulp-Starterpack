/*==========================================================
 * Quick Settings
 *=========================================================*/
// Set you main source assets folder path (relative to this file) without a trailing slash
var assets_source = 'assets/_src';

// Set you main source build folder path (where you want compiled files to be stored)
var assets_build = 'assets/_build';


/*==========================================================
 * Require Gulp & its plugins
 *=========================================================*/
// Include Gulp
var gulp = require('gulp');

// Include Gulp plugins
var concat 			= require('gulp-concat'),
    cssnano 		= require('gulp-cssnano'),
    autoprefixer 	= require('gulp-autoprefixer'),
    uglify 			= require('gulp-uglify'),
    jshint 			= require('gulp-jshint'),
    imagemin 		= require('gulp-imagemin'),
    pngquant 		= require('imagemin-pngquant');


/*==========================================================
 * Process CSS files
 *==========================================================*/
gulp.task('css', function() {
    return gulp.src([
    	assets_source + '/css/*.css'
	])
        // Minify CSS
        .pipe(cssnano())
        // Autoprefix
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        // Concatenate minified CSS files
        .pipe(concat('style.min.css'))
        // Save the final CSS file in the build folder
        .pipe(gulp.dest(assets_build + '/css'));
});




/*==========================================================
 * Process JS files
 *=========================================================*/
gulp.task('js', function() {
    return gulp.src([
    	assets_source + '/js/libs/*.js',
    	assets_source + '/js/main.js'
    ])
        // Minify JS files
        .pipe(uglify())
        // Concatenate minified JS files
        .pipe(concat('main.min.js'))
        // Save final JS file in build folder
        .pipe(gulp.dest(assets_build + '/js'));
});

// Copy JS vendor files to final build
gulp.task('copy_js', function() {
    gulp.src([
    	assets_source + '/js/vendor/*.js'
	])
    .pipe(gulp.dest(assets_build + '/js/vendor'));
});

// Lint your selected JS files
gulp.task('jshint', function() {
    return gulp.src([
    	assets_source + '/js/main.js'
	])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

