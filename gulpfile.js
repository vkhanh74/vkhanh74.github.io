const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require("gulp-babel");
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const browserSync = require('browser-sync').create();
const {src,dest,watch} = gulp;

const path = {
    scss: './assets/sass/**/*.scss',
    html: './*.html',
    js: './assets/js/main.js',
}

function browserSyncF() {
    browserSync.init({
        server: "./"
    });
}

function liveReload() {
    return browserSync.reload;
}

function scss() {
    return src(path.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./assets/css'))
        .pipe(browserSync.stream());
}

function gulpBabel() {
	return src(path.js)
		.pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest('./assets/js'))
        .pipe(browserSync.stream());
}

function watchChange() {
    watch(path.scss, scss);
    watch(path.html).on('change', liveReload());
    watch(path.js, gulpBabel);
}

exports.default = gulp.parallel(watchChange, browserSyncF)