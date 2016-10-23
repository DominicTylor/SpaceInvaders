/**
 * Created by Владимир on 22.10.2016.
 */
'use strict';

const prod = process.argv.indexOf('-p') !== -1;
const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'app'),

    entry: {
        main: './main.js',
    },

    output: {
        path: path.resolve(__dirname),
        publicPath: '/',
        filename: 'build.js',
    },

    watch: !prod,

    devtools: prod ? null : 'cheap-inline-module-source-map',

    plugins: [
        new webpack.NoErrorsPlugin(),
    ],

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
                loader: "style!css!less"
            },
        ],
    },
};

if (prod) {
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
