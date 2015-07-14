// Include the required packages. 
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
		minifyHTML = require('gulp-minify-html'),
		imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
		uglify = require('gulp-uglify');

// Paths
var jsFiles = ['app/dev/js/vendor/jquery-1-11-3.js', 'app/dev/js/vendor/slick.js', 'app/dev/js/main.js'];

// Sass
gulp.task('compile', function(){
  return sass('app/dev/sass/styles.scss', {
    style: 'compressed',
    noCache: true
  })
  .pipe(gulp.dest('app/css/'))
});

// Compress HTML
gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src('app/dev/index.html')
    .pipe(plumber())
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('app/'));
});

// Scripts JS
gulp.task('jsmin', function(){
  gulp.src(jsFiles)
  .pipe(concat('js/main.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/'))
});

// Images
gulp.task('imagemin', function() {
  return gulp.src('app/dev/images/**/*')
    .pipe(plumber())
    .pipe(imagemin({ optimizationLevel: 3, progressive: true}))
    .pipe(gulp.dest('app/images/'));
});

// Watch
gulp.task('watch', function(){
  gulp.watch('app/dev/index.html', ['minify-html']); 
  gulp.watch('app/dev/sass/**/*', ['compile']); 
  gulp.watch('app/dev/images/**/*', ['imagemin']);
  gulp.watch('app/dev/js/**', ['jsmin']);
});

gulp.task('default', ['minify-html','compile','imagemin','jsmin']);
