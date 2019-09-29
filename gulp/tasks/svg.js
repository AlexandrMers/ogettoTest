let svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    svgPath = {
        "input": "./dev/static/images/svg/*.svg",
        "output": "./build/static/images/svg/"
    };

module.exports = function () {
    $.gulp.task('svg', () => {
        return $.gulp.src(svgPath.input).pipe($.gulp.dest(svgPath.output));
    });
};
