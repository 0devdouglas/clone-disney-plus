const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imageMin = require('gulp-imagemin')

function compressSass () {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/styles'))
}

function compressImage () {
    return gulp.src('./src/images/**/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(compressSass, compressImage);

exports.watch = () =>  {
    gulp.watch('./src/styles/*.scss', gulp.parallel(compressSass))
}