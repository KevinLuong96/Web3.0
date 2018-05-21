const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')


const mode = process.env.WEBPACK_SERVE ? 'development' : 'production';
const scssLoader = mode === 'development' ? "style-loader" :  MiniCssExtractPlugin.loader;

module.exports = {
    entry: "./main.js",
    mode: "development",
    output: {
        path: path.join(__dirname, "dist") ,
        filename: "bundle.js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:'bundle.css'
        }),
        new HtmlWebpackPlugin({
            title: "Kevin Luong",
            template: "template.html"
        }),
        new CopyWebpackPlugin([
            { from: './images/*', to: './' },
        ],),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    // "style-loader",
                    scssLoader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|otf|ttf|svg|jp(e*)g)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            },
        ],
    },
};