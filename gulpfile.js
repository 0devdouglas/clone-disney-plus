const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compressSass () {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/styles'))
}

exports.default = compressSass;
exports.watch = () =>  {
    gulp.watch('./src/styles/*.scss', gulp.parallel(compressSass))
}