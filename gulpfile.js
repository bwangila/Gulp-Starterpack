/*==========================================================
 * Quick Settings
 *=========================================================*/
// Set you main source assets folder path (relative to this file) without a trailing slash
var assets_source = 'assets/_src';

// Set you main source build folder path (where you want compiled files to be stored)
var assets_source = 'assets/_build';


/*==========================================================
 * Require Gulp & its plugins
 *=========================================================*/
// Include Gulp
var gulp = require('gulp');

// Include Gulp plugins
var concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');
