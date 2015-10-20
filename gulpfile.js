var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var sass         = require('gulp-sass');

var paths = {
  src: {
    scss: ['css/*.scss'],
    index: 'index.html',
    assets: ['assets/**/*']
  },
  dest: {
    assets: 'app/assets',
    dir: 'app/'
  }
}

gulp.task('default', ['sass', 'assets', 'watch']);

gulp.task('sass', function () {
  gulp.src(paths.src.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.dest.dir));
});

gulp.task('assets', function() {
  gulp.src(paths.src.index)
    .pipe(gulp.dest(paths.dest.dir))
  gulp.src(paths.src.assets)
    .pipe(gulp.dest(paths.dest.assets))
})

gulp.task('watch', function(){
  gulp.watch(paths.src.scss, ['sass']);
  gulp.watch(paths.src.assets, ['assets']);
  gulp.watch(paths.src.index, ['assets']);
});
