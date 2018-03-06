var path = require('path');
var webpack = require('webpack');
var Visualizer = require('webpack-visualizer-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000,
        historyApiFallback: true,
    },
    entry: './dev/js/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                  })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                  })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new ExtractTextPlugin('style/style.css'),
    ]
};
