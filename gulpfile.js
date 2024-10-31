var gulp         = require('gulp'),
    uglify       = require('gulp-uglify'),
    concat 		 = require('gulp-concat'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync  = require('browser-sync').create(),
    reload       = browserSync.reload;


gulp.task('uglyjs', function() {
    return gulp.src('library/js/src/*.js')
                .pipe(uglify())
                .pipe(gulp.dest('library/js/min'))
                .pipe(reload({stream: true}));
});

//gulp.task('styles', function() {
//    return gulp.src('library/scss/**/*.scss')
//                .pipe(sass().on('error', sass.logError))
//                .pipe(autoprefixer({
//                            browsers: ['last 3 versions']
//                        }))
//                .pipe(gulp.dest('library/css'));
//});
//
//gulp.task('stylesmin', function() {
//    return gulp.src('library/scss/**/*.scss')
//                .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//                .pipe(autoprefixer({
//                            browsers: ['last 3 versions']
//                        }))
//                .pipe(gulp.dest('library/css/min'))
//                .pipe(reload({stream: true}));
//});


gulp.task('serve', function() {

    browserSync.init({
        proxy: "protester.local",
        notify: false,
    });

    gulp.watch('library/js/src/*.js',       ['uglyjs']);
    //gulp.watch('library/scss/**/*.scss',    ['styles']);
    //gulp.watch('library/scss/**/*.scss',    ['stylesmin']);

    gulp.watch('*.html').on('change', reload);

});

gulp.task('default', ['serve']);
