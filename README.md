# boilerplate by Weerapat Chulaket, March 2018.
### Create **root** folder and following below.
  This below command for initial npm when you use **npm install ...**
```
$ npm init -y
```
### Install Webpack.
```
$ npm i -D webpack webpack-dev-server webpack-cli
```
npm **install --save-dev** can use **i** and **-D**.
### Install Babel.
Babal is made a new version as javascript to version that all browser can compile.
```
$ npm i -D babel-core babel-loader babel-preset-env
$ npm i -D babel-preset-stage-2
$ npm i -D babel-preset-react
```
In **package.json** file add this below.
```
// package.json

"babel": {
  "presets": [
    "env",
    "react",
    "stage-2"
  ]
},
```
### Create '.babelrc' file in root folder.
```
$ touch .babelrc
```
In **.babelrc** add this below.
```
// .babelrc

{
  "presets": [
    "env",
    "react",
    "stage-2"
  ]
}
```
### Install React and Redux.
```
$ npm i -s react react-dom
$ npm i -D react-hot-loader
$ npm i react-redux redux redux-thunk redux-promise redux-logger -s
```
### Install react-router-dom, redux-form, redux-saga, validator
For route and library maganged about store in redux
```
$ npm i -s react-router-dom
$ npm i -s redux-form
$ npm i -s redux-saga
$ npm i -s validator
```
### Install about webpack config.
```
$ npm i -D html-webpack-plugin
$ npm i -D webpack-merge
$ npm i -D uglifyjs-webpack-plugin
$ npm i -D clean-webpack-plugin
$ npm i -D webpack-visualizer-plugin
```
> **webpack-merge** use for merge file *webpack.common.js* with *webpack.dev.js* and *webpack.prod.js*\
> **clean-webpack-plugin** use for clean/remove 'dist' folder that you built before *npm start*\
> **uglifyjs-webpack-plugin** use for ***Minification***\
> *webpack ^v.4* can't use extract-text-webpack-plugin at now(March 2018)

### Loader.
```
$ npm i -D sass-loader node-sass
$ npm i -D css-loader file-loader style-loader
```
### Webpack config files.
Create 3 files in root folder
+ webpack.common.js
+ webpack.dev.js
+ webpack.prod.js
In ***webpack.common.js***
```
// webpack.common.js

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.resolve('./dev/index.js')
    ],
    mode: 'development',
    devServer: {
        hot: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'React Boilerplate',
            template: path.resolve('src/index.template.html'),
            filename: 'index.html',
            inject: 'body'
        }),
    ]
};
```
In ***webpack.dev.js***
```
// webpack.dev.js

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});
```
In ***webpack.prod.js***
```
// webpack.prod.js

const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new Visualizer({
            filename: './statistics.html'
        }),
    ]
});
```

Then **import './style.scss'** at *index.js* file.
  
Installation boilerplate completed, Enjoy!!!
+ **npm start**
+ start your local : [http://localhost:3000/](http://localhost:3000/)
+ or [http://localhost:8080/](http://localhost:8080/) if you doesn't set **port: 3000** in file config.
+ **npm run build** for build your application with ***reduce file size***.\
Good bye, Thank you.
