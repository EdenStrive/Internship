const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
// const CleanWebpackPlugin = require('clean-webpack-plugin');//每次打包前会清理掉指定文件夹里面的文件(不知为何会报错)

module.exports = {
    // entry:'./src/index.js',
    entry:{
        // app:'./src/index.js',
        // print:'./src/print.js'
        app:'./src/index.js'
    },
    devtool:'inline-source-map',//将错误追踪到原文件
    devServer: {
        contentBase: './dist', //devServer热重载 但是不能修改dist里面的文件
        hot:true
    },
    plugins:[
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Output Management' //此插件会自动生成index.html
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        // filename:'bundle.js',
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,//进行正则的方式进行匹配
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader' //file-loader可以接受并加载任何文件，然后将其输出到构建目录 这里用的加载字体，上面的是加载的图片
                ]
            },
            {
                test:/\.(csv|tsv)$/,
                use:[
                    'csv-loader'
                ]
            }, 
            {
                test:/\.xml$/,
                use:[
                    'xml-loader'
                ]
            }
        ]
    }
}