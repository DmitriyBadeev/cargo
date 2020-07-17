var gulp 		 = require('gulp');
var config 		 = require('../package.json').config; 
 
gulp.task('script', function () {
	gulp.src(config.src.script)
    	.pipe(gulp.dest(config.dist.script));
});
 
gulp.task('script:watch', function () {
  gulp.watch(config.src.script, ['script']);
});