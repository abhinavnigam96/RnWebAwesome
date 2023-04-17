"use strict";
var path = require('path');
var appDirectory = path.resolve(__dirname, './');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var presets = require("".concat(appDirectory, "/babel.config.js")).presets;
// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
var babelLoaderConfiguration = {
    test: /\.js$/,
    // Add every directory that needs to be compiled by Babel during the build.
    include: [
        path.resolve(appDirectory, 'index.web.js'),
        path.resolve(appDirectory, 'src'),
        path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
        path.resolve(appDirectory, 'node_modules/react-navigation/native'),
        path.resolve(appDirectory, 'node_modules/react-navigation/native'),
    ],
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
            presets: presets,
            // Re-write paths to import only the modules needed by the app
            plugins: ['react-native-web'],
        },
    },
};
// This is needed for webpack to import static images in JavaScript files.
var imageLoaderConfiguration = {
    test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
    type: 'asset/resource',
};
module.exports = {
    entry: [
        // load any web API polyfills
        path.resolve(appDirectory, 'index.web.js'),
    ],
    // configures where the build ends up
    output: {
        filename: 'bundle.web.js',
        path: path.resolve(appDirectory, 'dist'),
    },
    // ...the rest of your config
    module: {
        rules: [imageLoaderConfiguration, babelLoaderConfiguration,
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        // This will only alias the exact import "react-native"
        alias: {
            'react-native$': 'react-native-web',
        },
        // If you're working on a multi-platform React Native app, web-specific
        // module implementations should be written in files using the extension
        // `.web.js`.
        extensions: ['.web.js', '.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: appDirectory + '/public/index.html',
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
};
