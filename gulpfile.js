
//引入gulp包
var gulp = require('gulp')

//引入gulp-webserver 包
var webserver=require('gulp-webserver')
var proxy = require('http-proxy-middleware')

//引入gulp-webpack包
var webpack=require('gulp-webpack')

//引入 文件名提取 包
var named =require('vinyl-named')

//版本号控制相关包
var rev=require('gulp-rev')
var revCollector=require('gulp-rev-collector')
var del=require('del')
var gulpSequence=require('gulp-sequence')

//gulp load 包
var $=require('gulp-load-plugins')()

//引入gulp-sass包
var sass=require('gulp-sass')

//环境切换配置
var minimist = require('minimist')
var gulpif = require('gulp-if')
var knownOptions = {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'production'}
}
var options = minimist(process.argv.slice(2), knownOptions)

//启动webserver服务
gulp.task('webserver',function(){
	gulp.src('./dev/')
		.pipe(
			webserver({
				host:'localhost',
				port:8000,
				directoryListing:{
					enable:true,
					path:'./dev'
				},
				livereload: true,
		        middleware: [
		          // 反向代理
		          proxy('/mock', {
		            target: 'http://localhost:9000/',
		            changeOrigin: true,
		            pathRewrite: {
		              '^/mock': ''
		            }
		          }),
		          proxy('/api', {
                target:'http://m.hlamall.cn/',
		           // target: 'http://www.adidas.com.cn/',
              //  target:'http://localhost:3000/',
		            changeOrigin: true,
		            pathRewrite: {
		              '^/api': ''
		            }
		          })
		        ]
			})
		)
})


//打包js
gulp.task('packjs',function(){
	return gulp.src('./src/script/*.js')
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
		.pipe(gulpif(options.env === 'production', $.uglify()))
	    .pipe(gulpif(options.env === 'production', rev()))
	    .pipe(gulpif(options.env === 'production', gulp.dest('./build/script')))
	    .pipe(gulpif(options.env !== 'production', gulp.dest('./dev/script')))
	    .pipe(gulpif(options.env === 'production', rev.manifest()))
	    .pipe(gulpif(options.env === 'production', gulp.dest('./build/rev/script')))
})


//打包scss
gulp.task('packcss',function(){
	gulp.src('./src/style/usage/*.scss')
	    .pipe(sass().on('error', sass.logError))
	    .pipe(gulpif(options.env === 'production', $.minifyCss()))
	    .pipe(gulpif(options.env === 'production', rev()))
	    .pipe(gulpif(options.env === 'production', gulp.dest('./build/style')))
	    .pipe(gulpif(options.env !== 'production', gulp.dest('./dev/style')))
	    .pipe(gulpif(options.env === 'production', rev.manifest()))
	    .pipe(gulpif(options.env === 'production', gulp.dest('./build/rev/style')))
})

// copy images
gulp.task('copyimage', function () {
  gulp.src('./src/images/**/*')
    .pipe(gulpif(options.env === 'production', gulp.dest('./build/images')))
    .pipe(gulpif(options.env !== 'production', gulp.dest('./dev/images')))
})

// copy libs
gulp.task('copylibs', function () {
  gulp.src('./src/script/libs/*.*')
    .pipe(gulpif(options.env === 'production', gulp.dest('./build/libs')))
    .pipe(gulpif(options.env !== 'production', gulp.dest('./dev/libs')))
})

//拷贝src下的html到build下
gulp.task('copyhtml',function(){
	gulp.src('./src/*.html')
    .pipe(gulpif(options.env === 'production', gulp.dest('./build/')))
    .pipe(gulpif(options.env !== 'production', gulp.dest('./dev/')))
})

//HTML增加版本号
gulp.task('packhtml', function () {
  return gulp.src(['./build/rev/**/*.json', './build/*.html'])
    .pipe(revCollector())
    .pipe($.minifyHtml())
    .pipe(gulp.dest('./build'))
})

// 删除 build 里的文件
gulp.task('clean', del.bind(null, ['./build/**/*'], {
  force: true
}))

// pack
gulp.task('pack', function (callback) {
  if(options.env === 'production') {
    gulpSequence('clean', ['packjs', 'packcss', 'copyhtml', 'copylibs', 'copyimage'], 'packhtml')(callback)
  } else {
    gulpSequence(['packjs', 'packcss', 'copyhtml', 'copylibs', 'copyimage'])(callback)
  }
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

// 定义默认任务
gulp.task('default', ['pack', 'watch', 'webserver'], function () {
  console.log('done.')
})
