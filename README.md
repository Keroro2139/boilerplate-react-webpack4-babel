# boilerplate by Weerapat Chulaket, March 2018.
### Create **root** folder and following below.
  This below command for initial npm when you use **npm install ...**
```
$ npm init -y
```
### Create 'dist'(folder name) folder for 'index.html'.
```
$ mkdir dist
$ cd dist
$ touch index.html
```
if you have problem with **touch** command, you can create folder and file by manual.

### First, install Webpack.
```
$ npm i -D webpack webpack-dev-server webpack-cli
```
npm **install --save-dev** can use **i** and **-D**.

### In package.json file.
```
// package.json

...
"scripts": {
  "start": "webpack-dev-server --config ./webpack.config.js --mode development",
  ...
},
...
```
### Install html-webpack-plugin.
```
$ npm i -D html-webpack-plugin
```
### Create webpack.config.js file in root folder.
```
$ touch webpack.config.js
```
Copy below and paste into **webpack.config.js** file
```
// webpack.config.js

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.resolve('./dev/index.js')
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve('./dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Google Maps',
      template: path.resolve('src/index.template.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000
  }
};
```
### Create 'src' folder for 'index.js' in root folder.
```
$ mkdir src
$ cd src
$ touch index.js
```
### Second, install Babel.
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
### Third, install React and Redux.
```
$ npm i -s react react-dom
$ npm i -D react-hot-loader
$ npm i react-redux redux redux-thunk redux-promise redux-logger -s
```
### At least *package.json* file.
```
{
  "name": "boilerplate",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --config ./webpack.config.js --mode development",
    "build": "webpack"
  },
  "author": "",
  "license": "ISC",
  "babel": {
    "presets": [
      "env",
      "react",
      "stage-2"
    ]
  },
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.4",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "html-webpack-plugin": "^3.0.6",
    "react-hot-loader": "^4.0.0",
    "webpack": "^4.1.1",
    "webpack-cli": "^2.0.11",
    "webpack-dev-server": "^3.1.1"
  },
  "dependencies": {
    "lodash": "^4.17.5",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.7",
    "redux": "^3.7.2",
    "redux-logger": "^3.0.6",
    "redux-promise": "^0.5.3",
    "redux-thunk": "^2.2.0"
  }
}
```

