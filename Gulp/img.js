var gulp 		 = require('gulp');
var config 		 = require('../package.json').config; 
var imagemin 	 = require('gulp-imagemin');
 
gulp.task('img', function () {
	gulp.src(config.src.img.nocompress)	
    	.pipe(gulp.dest(config.dist.img));

    gulp.src(config.src.img.compress)
    	.pipe(imagemin([
    		imagemin.gifsicle({interlaced: true}),
    		imagemin.jpegtran({progressive: true}),
    		imagemin.optipng({optimizationLevel: 5}),
    		imagemin.svgo({
        	plugins: [
            	{removeViewBox: false},
            	{cleanupIDs: false}
        		]
    		})
		]))	
    	.pipe(gulp.dest(config.dist.img));
});
 
gulp.task('img:watch', function () {
  gulp.watch("src/img/**/*.*", ['img']);
});