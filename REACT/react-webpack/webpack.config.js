//向外暴露一个打包的配置对象 webpack是基于node构建的 所以用的是module.exports 所以webpack支持所有node API和语法
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname,'./index.html'),
    filename: 'index.html'
})



//webpack默认只能够打包处理.js后缀名类型的文件；像png css vue无法主动处理。所以需要配置第三方的loader
module.exports = {
    mode:'development',//development 生产环境（调试环境） production 产品环境 此选项为必选项
    //在webpack 4.x，默认的打包入口文件是src->index.js 3.x需要自己配置同时一般为main.js ,4.x默认了打包的入口和输出文件 
    output: {
        publicPath:'/', //打包的js文件script从根路径进行定位 这个很重要，因为和react-router有时会有冲突（二级导航页时）
        filename: 'main.js',
        path: __dirname + '/dist'
    },
    plugins:[
        htmlPlugin
    ],
    module:{ //所有第三方模块的配置规则
        rules:[ //第三方规则
            {test: /\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},//千万别忘记添加exclude排除项
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(png|jpg|jepg|gif)$/,use:[ { loader:"url-loader"}] }//对引入js文件的图片进行加载处理
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'],//表示，引入这几个文件的后缀名，可以省略不写
        alias:{
            "@":path.join(__dirname,'./src') //这样在 @就表示src目录
        }
    },
    devServer:{
        historyApiFallback: true
    }
}

//webpack-dev-server生成的js文件是放在内存中的，并没有放在物理磁盘上 但是我们可以理解为隐形的main.js

//目前不行 es6的api 不是node的api
// export default{

// }