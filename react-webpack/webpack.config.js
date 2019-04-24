//向外暴露一个打包的配置对象 webpack是基于node构建的 所以用的是module.exports 所以webpack支持所有node API和语法
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname,'./src/index.html'),
    filename: 'index.html'
})
//webpack默认只能够打包处理.js后缀名类型的文件；像png css vue无法主动处理。所以需要配置第三方的loader
module.exports = {
    mode:'production',//development 生产环境（调试环境） production 产品环境 此选项为必选项
    //在webpack 4.x，默认的打包入口文件是src->index.js 3.x需要自己配置同时一般为main.js ,4.x默认了打包的入口和输出文件 
    plugins:[
        htmlPlugin
    ],
    module:{ //所有第三方模块的配置规则
        rules:[ //第三方规则
            {test: /\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},//千万别忘记添加exclude排除项
        ]
    }
}

//webpack-dev-server生成的js文件是放在内存中的，并没有放在物理磁盘上 但是我们可以理解为隐形的main.js

//目前不行 es6的api 不是node的api
// export default{

// }