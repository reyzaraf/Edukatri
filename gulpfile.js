// ------------------------------------
// Define Variables
// ------------------------------------

const { src, dest, series, parallel, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const fileinclude = require('gulp-file-include');
const gulpif = require('gulp-if');
const htmlbeautify = require('gulp-html-beautify');
const htmlmin = require('gulp-htmlmin');
const htmlreplace = require('gulp-html-replace');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const webpack = require('webpack-stream');

let serve = () => {
	browserSync.init({
		server: {
			baseDir: './dist',
		},
		notify: false
	})

	watch('./app/html/**/*.html', html).on('change', browserSync.reload);
	watch('./app/scss/**/*.scss', scss);
	watch('./app/js/**/*.js', js).on('change', browserSync.reload);
}

let html = () => {
	return src('./app/html/*.html')
	.pipe(fileinclude())
	.pipe(htmlbeautify())
	.pipe(dest('./dist/'))
}

function scss() {
	return src('./app/scss/app.scss')
	.pipe(sourcemaps.init())
	.pipe(plumber())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer('last 2 versions'))
	.pipe(sourcemaps.write('./'))
	.pipe(plumber.stop())
	.pipe(rename('style.css'))
	.pipe(dest('./dist/assets/css/'))
	.pipe(browserSync.stream())
}

function js() {
	return src('./app/js/app.js')
	.pipe(sourcemaps.init())
	.pipe(webpack(require('./webpack.config.js')))
	.pipe(sourcemaps.write('./'))
	.pipe(dest('./dist/assets/js/'))
}

exports.html = html;
exports.scss = scss;
exports.js = js;
exports.serve = serve;