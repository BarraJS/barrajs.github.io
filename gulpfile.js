// include the required packages. 
var gulp = require('gulp'),
		stylus = require('gulp-stylus'),
		minifyHTML = require('gulp-minify-html'),
		imagemin = require('gulp-imagemin'),
		plumber = require("gulp-plumber"),
		uglify = require('gulp-uglify');


//compress stylus
gulp.task('stylus', function () {
	gulp.src('app/dev/style.styl')
		.pipe(plumber())
		.pipe(stylus({
			compress: true
		}))
		.pipe(gulp.dest('app/css/'));
});
//compress html
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
//imagemin
gulp.task('imagemin', function() {
    return gulp.src('app/dev/image/**/*')
        .pipe(plumber())
        .pipe(imagemin({ optimizationLevel: 3, progressive: true}))
        .pipe(gulp.dest('app/image/'));
});

gulp.task('uglify', function() {
  gulp.src('app/dev/js/**')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('app/js/'))
});

gulp.task('default', ['stylus', 'minify-html','imagemin','uglify']);
