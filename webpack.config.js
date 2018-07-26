const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
     resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    devtool: 'source-map',
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
          }
        ]
    },
    devServer: {
        port: 3000,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]

}
