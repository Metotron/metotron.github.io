'use strict';

const gulp         = require('gulp'),
      scss         = require('gulp-sass'),
      pug          = require('gulp-pug'),
      prefixer     = require('gulp-autoprefixer'),
      sourceMaps   = require('gulp-sourcemaps'),
      watch        = require('gulp-watch'),
      plumber      = require('gulp-plumber'),
      notify       = require('gulp-notify'),
      path         = require('path'),
      debug        = require('gulp-debug'),
      cp           = require('gulp-copy'),

      frontendSrc  = './assets/frontend/',
      indexSassSrc = path.resolve(frontendSrc, 'src/index/scss/**/*.scss'),
      allSassSrc   = path.resolve(frontendSrc, 'src/all/scss/**/*.scss'),
      dist         = './assets/frontend/dist',
      chunksToSync = './assets/**/*.*',
      fs		   = require('fs'),

      dev          = process.env.NODE_ENV !== 'production';

const compileSass = (inPath, outPath) => {
  return gulp.src(inPath)
    .pipe(plumber({
      errorHandler: notify.onError(err => {
        return {
          title:   'sass',
          message: err.message
        }
      })
    }))
    .pipe(sourceMaps.init())
    .pipe(scss())
    .pipe(prefixer({
      browsers: [
        '> 1%',
        'last 10 versions',
        'IE 10',
        'IE 11'
      ],
      cascade:  false
    }))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest(outPath))
    .pipe(cp('/home/user/tmp/tests/assets/frontend/dist/all/', {prefix: 4}))
};


gulp
  .task('all:sass', () => {
    return compileSass(allSassSrc, path.resolve(frontendSrc, 'dist/all'));
  })

  .task('index:sass', () => {
    compileSass(indexSassSrc, path.resolve(frontendSrc, 'dist/index'));
  })

  .task('watch', () => {
    gulp.watch(indexSassSrc, ['index:sass']);
    gulp.watch(allSassSrc, ['all:sass']);
  })

  .task('build', [
    'all:sass',
    'index:sass',
  ])

  .task('default', [
    'build',
    'watch'
  ])

  .task('sync-chunk', () =>	{
		gulp.watch(chunksToSync, function(ev) {
			console.log(ev.path)	
			return gulp.src(ev.path)
			.pipe(cp('/home/user/tmp/nalog/'))
		})
  });
