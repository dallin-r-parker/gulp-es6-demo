const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

const jsPath = ["./js/app.js", "./js/**/*.js"]

gulp.task('concat', function() {
    gulp.src(jsPath)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('es6', function() {
  gulp.src(jsPath)
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('./dist'))
})

gulp.task('es6-bundle', function() {
  gulp.src(jsPath)
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./dist'))
})

gulp.watch(jsPath, ['es6-bundle'])
