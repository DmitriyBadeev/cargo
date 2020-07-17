var gulp 		 	= require('gulp');
var runSequence 	= require('run-sequence');

gulp.task('default', function() {
  runSequence(
  	'build',
  	[
  		'sass:watch',
  		'html:watch',
  		'script:watch',
  		'img:watch'
  	],
    'server'
    );
});