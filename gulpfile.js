var gulp = require('gulp-param')(require('gulp'), process.argv),
	less = require('gulp-less'),
	path = require('path'),
	del = require('del'),
	util = require('gulp-util');

var routes = {
  less: "css/style.less"
};

//Clean CSS Files
gulp.task('cleanCSS', function() {
	return del(['css/style.css']);
});

//Building LESS files in CSS files
gulp.task('buildCSS',['cleanCSS'], function() {
	return gulp.src(routes.less)
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(gulp.dest('css'));
});

//Default Gulp Action Watch buildJS and buildCSS
gulp.task('default', ['buildCSS'], function(){
	gulp.watch(routes.less, ['buildCSS']);
});
