const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack');
const webpackRxjsExternals = require('webpack-rxjs-externals');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    mode: devMode ? 'development' : 'production',
    devServer: {
        static: './dist'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|ico|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.pug$/,
                use: [
                    'pug-loader'
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            files: {
                'css': [
                    './src/styles/main.css',
                    './src/styles/under-construction.css'
                ]
            },
            inject: true,
            minify: !devMode
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new CopyWebpackPlugin({
            patterns: [

                { from: './src/assets', to: './assets' },
            ]
        }
        )
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd'
    },
    externals: [
        webpackRxjsExternals()
    ]
};
