"use strict";
const gulp = require("gulp");
const glob = require("glob");
const sourcemaps = require("gulp-sourcemaps");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const browserify = require("browserify");
const watchify = require("watchify");
const babel = require("babelify");

function compile(watch) {
    var filesToBundle = glob.sync("./js/**/*.js");
    var babelOptions = {
        presets: ["es2015"], //Transpile ES6 to ES5 when bundling
        compact: true, //Semi-minify the code when bundling
        comments: false //Remove comments from code when bundling
    };

    var transformedCode = browserify({ debug: true, entries: filesToBundle }).transform(babel, babelOptions);
    var bundler = watchify(transformedCode);

    function rebundle() {
        bundler.bundle()
          .on("error", function (err) { console.error(err); this.emit("end"); })
          .pipe(source("build.js"))
          .pipe(buffer())
          .pipe(sourcemaps.init({ loadMaps: true }))
          .pipe(sourcemaps.write("./"))
          .pipe(gulp.dest("./build"));
    }

    if (watch) {
        bundler.on("update", function () {
            var dateNow = new Date();
            var dateString = dateNow.getMonth() +
                "/" + dateNow.getDate() + "/" + dateNow.getFullYear() + " " + dateNow.getHours() +
                ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds();
            console.log("-> bundling..." + dateString);
            rebundle();
        });
    }

    rebundle();
}

function watch() {
    return compile(true);
}

gulp.task("build", function () { return compile(); });
gulp.task("watch", function () { return watch(); });

gulp.task("default", ["watch"]);
