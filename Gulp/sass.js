var gulp 		 = require('gulp');
var sass 		 = require('gulp-sass');
var config 		 = require('../package.json').config; 
var plumber  	 = require('gulp-plumber');
var notify 		 = require("gulp-notify");
var autoprefixer = require('gulp-autoprefixer');
var cssnano 	 = require('gulp-cssnano');
var rename 		 = require("gulp-rename");

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src(config.src.sass)	
  	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
	    browsers: ['last 2 versions'],
	    cascade: false
	}))
	.pipe(cssnano())
	.pipe(rename({
    	dirname: "",
    	basename: "main",
    	prefix: "",
    	suffix: ".min",
    	extname: ".css"
  }))
    .pipe(gulp.dest(config.dist.css));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.*', ['sass']);
});