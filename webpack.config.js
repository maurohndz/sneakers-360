require("@babel/polyfill");
const path = require('path');
const HtmlWebpackPluging = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: ["@babel/polyfill", './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPluging({
            template: './public/index.html',
            filename: './index.html'
        }),
        new Dotenv()
    ]
}