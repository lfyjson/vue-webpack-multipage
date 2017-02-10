const webpack = require("webpack");
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const pxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');
const getEntry = require('./get-entry');
const alias = require('./alias');

const entrys = getEntry('./src/entry/*.js');
const titles = require('./page-title');

module.exports = {
    entry: Object.assign(entrys, {
        vendors: ['vue', 'vue-router', 'vue-resource', 'vuex', 'fastclick']
    }),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:16].js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        //只要配置dev server map这个参数就可以了
        proxy: {
            '/api/*': {
                target: 'localhost:8080',
                secure: false
            }
        }
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: alias
    },
    //babel重要的loader在这里
    module: {
        loaders: [
            // 解析.vue文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            // 转化ES6的语法
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            //html模板编译？
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                query: {
                    limit: 8192,
                    name: './images/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    postcss: [
        autoprefixer(),
        pxtorem({
            rootValue: 75,
            propWhiteList: []
        })
    ],
    // 转化成es5的语法
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime', ['component', [{
            'libraryName': 'mint-ui',
            'style': true
        }]]]
    },
    // babel: {
    //     presets: ['es2015'],
    //     plugins: ['transform-runtime']
    // },
    plugins: [
        // new webpack.HotModuleReplacementPlugin({
        //     multiStep: true
        // }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'js/[name].[hash:8].js'),
        new webpack.optimize.OccurenceOrderPlugin(), //为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.NoErrorsPlugin(), //报错但不退出webpack进程
        new webpack.BannerPlugin('vue')
    ].concat(getHtmlWebpackPlugin(entrys))
}

function getHtmlWebpackPlugin(pages) {
    var arr = [];
    for(var name in pages) {
        if(name === 'vendors') {
            continue;
        }
        arr.push(new HtmlwebpackPlugin({
            title: titles[name],
            template: './index.ejs',
            filename: name + '.html',
            chunks: [name, 'vendors'],
            inject: true
        }));
    }
    return arr;
}
