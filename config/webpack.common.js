var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');


module.exports = {

    entry: {
        'polyfills': './src/polyfills.js',
        'vendor': './src/vendor.js',
        'app': './src/main.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "raw" },
            { test: /\.scss$/, loaders: ["raw", "sass"] },
            { test: /\.html$/, loader: "html" },
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=assets/[name].[hash].[ext]'},
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};