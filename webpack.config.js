const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./main.js",
    mode: "development",
    output: {
        path: path.join(__dirname, "dist") ,
        filename: "bundle.js"
    },
    devServer: {
        contentBase: __dirname + '/src',
        port: 3000,
        historyApiFallback: true,
        hot: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:'bundle.css'
        }),
        new HtmlWebpackPlugin({
            title: "Kevin Luong",
            template: "template.html"
        })
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
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ],
    },
};