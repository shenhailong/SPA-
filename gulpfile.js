var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cleanCss = require('gulp-clean-css');//压缩css
var autoprefixer = require('gulp-autoprefixer');//根据设置浏览器版本自动处理浏览器前缀
var browserSync = require('browser-sync').create();//浏览器同步测试工具
var plumber = require('gulp-plumber');//
var notify = require('gulp-notify');
var plumberOptions = {
  errorHandler: notify.onError('Error:<%= error.message %>')
};


//样式
gulp.task('sass',function(){
  gulp.src('./scss/style.scss')
      .pipe(plumber(plumberOptions))
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(autoprefixer({
        browsers:['last 20 version','ie > 8']
      }))
      // .pipe(cleanCss({
      //   compatibility:'ie8'
      // }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./static/css'))
      .pipe(browserSync.stream())
})


//静态服务器 +监听scss／html 文件
gulp.task('server',['sass'],function(){
  browserSync.init({
    server:'./'
  });

  gulp.watch('./scss/**/*/scss',['sass']);
  //gulp.wacth('./html')
})

//默认开发
gulp.task('default',['server'])























