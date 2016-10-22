/**
 * Created by Владимир on 22.10.2016.
 */
'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'app'),

    entry: {
        main: './main.js',
    },

    output: {
        path: path.resolve(__dirname),
        filename: 'build.js',
    },

    //watch: NODE_ENV === 'development',

    devtools: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : null,

    plugins: [],

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.less$/,
                loader: "style!css!less?resolve url"
            },
        ],
    },
};

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true,
            },
        })
    );
}
