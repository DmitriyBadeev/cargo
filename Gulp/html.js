var gulp 		 = require('gulp');
var config 		 = require('../package.json').config; 
var plumber  	 = require('gulp-plumber');
var notify 		 = require("gulp-notify");


 
gulp.task('html', function () {
	gulp.src(config.src.html)	
  		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))

    	.pipe(gulp.dest(config.dist.html));
});
 
gulp.task('html:watch', function () {
  gulp.watch(config.src.html, ['html']);
});