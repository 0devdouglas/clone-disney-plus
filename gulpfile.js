const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imageMin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

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

function compressJs () {
    return gulp.src('./src/scripts/*.js') 
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

exports.default = gulp.parallel(compressSass, compressImage, compressJs);

exports.watch = () =>  {
    gulp.watch('./src/styles/*.scss', gulp.parallel(compressSass))
    gulp.watch('./src/script/*.js', gulp.parallel(compressJs))
}