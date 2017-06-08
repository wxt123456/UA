
//引入gulp包
var gulp = require('gulp')

//引入gulp-webserver 包
var webserver=require('gulp-webserver')

//引入gulp-webpack包
var webpack=require('gulp-webpack')

//引入 文件名提取 包
var named =require('vinyl-named')

//引入gulp-sass包
var sass=require('gulp-sass')

//拷贝src下的html到build下
gulp.task('copyhtml',function(){
	gulp.src('./src/*.html')
		.pipe(gulp.dest('./build'))
})	



//启动webserver服务
gulp.task('webserver',function(){
	gulp.src('./build/')
		.pipe(
			webserver({
				host:'10.9.166.11',
				port:8000,
				directoryListing:{
					enable:true,
					path:'./build'
				},
				livereload:true,
				middleware:[
					//反向代理
					proxy('/mock',{
						target:'http://localhost:9000',
						pathRewrite:{
							''
						}
					})
				]
			})
		)
})


//打包js
gulp.task('packjs',function(){
	gulp.src('./src/script/*.js')
		.pipe(named())
		.pipe(webpack({
			output:{
				filename:'[name].js'
			},
			module:{
				loaders:[
					{
						test:/\.js$/,
						loader:'imports-loader',
						exclude:'./node_modules'
					},
					{
						test:/\.string$/,
						loader:'string-loader',
						exclude:'./node_modules'
					}
				]
			}
		}))
		.pipe(gulp.dest('./build/script'))
})


//打包scss
gulp.task('packcss',function(){
	gulp.src('./src/style/usage/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('./build/style'))
})





// copy images
gulp.task('copyimage', function () {
  gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./build/images'))
})

// copy libs
gulp.task('copylibs', function () {
  gulp.src('./src/script/libs/*.*')
    .pipe(gulp.dest('./build/libs'))
})


//监测文件变化
gulp.task("watch",function(){
	gulp.watch('./src/*.html', ['copyhtml'])
	gulp.watch('./src/script/**/*.js',['packjs'])
	gulp.watch('./src/script/**/*.string',['packjs'])
	gulp.watch('./src/style/usage/**/*.scss',['packcss'])
	gulp.watch('./src/images/**/*', ['copyimage'])
  gulp.watch('./src/libs/**/*', ['copylibs'])
})




//定义默认任务
gulp.task('default',['copyhtml','copyimage','copylibs','packjs','packcss','watch','webserver'],function(){
	console.log('done')

})
