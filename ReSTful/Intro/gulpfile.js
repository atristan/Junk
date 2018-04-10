// Include gulp library
//         nodemon library
var gulp = require('gulp')
    , nodemon = require('gulp-nodemon')
    , gulpmocha = require('gulp-mocha')
    , evn = require('gulp-env')
    , supertest = require('supertest');

gulp.task('default', function () {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 8000
        },
        ignore: ['./node_modules/**']
    })
    .on('restart', function () {
        console.log('Restarting...');
    })
});

gulp.task('test', function () {
    // Pulls environment from gulp execution so you can switch environments
    evn({ vars: { ENV: 'Test' } });
    gulp.source('tests/*.js', { read: false })
        .pipe(gulpMocha({ reporter: 'nyan' }))
});