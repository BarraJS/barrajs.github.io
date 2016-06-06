var gulp = require('gulp'),
	jade = require('gulp-jade'),
	stylus = require('gulp-stylus'),
	imagemin = require('gulp-imagemin'),
	plumber = require("gulp-plumber"),
	uglify = require('gulp-uglify');

//gulp jade
gulp.task('jade', function() {
  return gulp.src('./dev/*.jade')
  	.pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
});

//gulp stylus
gulp.task('stylus', function () {
  return gulp.src('./dev/stylus/style.styl')
  	.pipe(plumber())
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./css'));
});

// Compress
gulp.task('imagemin', function() {
  return gulp.src('dev/images/**/*')
    .pipe(plumber())
    .pipe(imagemin({ optimizationLevel: 3, progressive: true}))
    .pipe(gulp.dest('./images/'));
});

//gulp uglify
gulp.task('uglify', function() {
  gulp.src('dev/js/**')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
});


// Watch
gulp.task('watch', function(){
	gulp.watch('dev/stylus/*.styl', ['stylus']);
	gulp.watch('dev/index.jade', ['jade']); 
	gulp.watch('dev/image/**/*', ['imagemin']);
	gulp.watch('dev/js/**', ['uglify']);
});


gulp.task('default', ['stylus', 'jade','imagemin','uglify']);