const config = require('./webpack.config.base.js');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');

const publicPath = 'http://localhost:8080/';

config.devtool = 'eval-source-map';
config.output.publicPath = publicPath;

config.module.loaders = (config.module.loaders || []).concat([
    // 编译css并自动添加css前缀
    {
        test: /\.css$/,
        loader: 'style!css?sourceMap',
        include: /node_modules/
    },
    {
        test: /\.css$/,
        loader: 'style!css?sourceMap!postcss',
        exclude: /node_modules/
    },
    //.scss 文件想要编译，scss就需要这些东西！来编译处理
    {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!postcss!sass?sourceMap'
    }
]);

config.vue = {
    loaders: {
        css: 'vue-style!css?sourceMap!postcss',
        scss: 'vue-style!css?sourceMap!postcss!sass'
    }
};

config.plugins = (config.plugins || []).concat([
    new OpenBrowserPlugin({
        url: publicPath
    })
]);

module.exports = config;
