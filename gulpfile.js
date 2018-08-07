const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sass", function() {
    gulp.src("./src/style/sass/*")
    .pipe(sass())
    .pipe(gulp.dest("./src/style/css"));
});

gulp.task("default", ["sass"], function() {
    gulp.watch("./src/style/sass/*", ["sass"]);
})