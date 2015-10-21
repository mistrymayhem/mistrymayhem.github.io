var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var sass         = require('gulp-sass');
var streamqueue  = require('streamqueue');
var concat       = require('gulp-concat');

var paths = {
  src: {
    js: ['node_modules/angular/angular.js', 'node_modules/angular/angular-ui-router.js', 'js/**/*.js'],
    scss: ['css/*.scss'],
    index: 'index.html',
    assets: ['assets/**/*'],
    partials: ['partials/**/*']
  },
  dest: {
    js: 'index.js',
    assets: 'app/assets',
    dir: 'app/',
    partials: 'app/partials'
  }
}

gulp.task('default', ['sass', 'assets', 'js', 'watch']);

gulp.task('sass', function () {
  gulp.src(paths.src.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.dest.dir));
});

gulp.task('js', function() {
  streamqueue(
    { objectMode: true },
    gulp.src(paths.src.js)
  )
    .pipe(concat(paths.dest.js))
    .pipe(gulp.dest(paths.dest.dir))
});

gulp.task('assets', function() {
  gulp.src(paths.src.index)
    .pipe(gulp.dest(paths.dest.dir))
  gulp.src(paths.src.assets)
    .pipe(gulp.dest(paths.dest.assets))
  gulp.src(paths.src.partials)
    .pipe(gulp.dest(paths.dest.partials));
})

gulp.task('watch', function(){
  gulp.watch(paths.src.scss, ['sass']);
  gulp.watch(paths.src.assets, ['assets']);
  gulp.watch(paths.src.index, ['assets']);
  gulp.watch(paths.src.js, ['js']);
  gulp.watch(paths.src.partials, ['assets']);
});
