var gulp = require('gulp');
var del = require('del');

var nodeRoot = './node_modules/';
var targetPath = './wwwroot/libs/';

gulp.task('clean', function () {
    return del([targetPath + '/**/*']);
});

gulp.task('default', function () {
    gulp.src(nodeRoot + "zepto/dist/zepto.min.js").pipe(gulp.dest(targetPath + "/zepto"));
    
    
});