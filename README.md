# boilerplate by Weerapat Chulaket, March 2018.
### Create **root** folder and following below.
  This below command for initial npm when you use **npm install ...**
```
npm init -y
```
### Create 'dist'(folder name) folder for 'index.html'.
```
mkdir dist
cd dist
touch index.html
```
if you have problem with **touch** command, you can create folder and file by manual.

### First, install webpack.
```
npm i -D webpack webpack-dev-server webpack-cli
```
npm **install --save-dev** can use **i** and **-D***.

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
### Create webpack.config.js file in root folder.
```
$ touch webpack.config.js
```
Copy below and paste into **webpack.config.js** file
```
// webpack.config.js
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
```

$ mkdir src
$ cd src
$ touch index.js
$ npm i -D babel-core babel-loader babel-preset-env
$ npm i -D babel-preset-stage-2
$ npm i -D babel-preset-react

// package.json
"babel": {
  "presets": [
    "env",
    "react",
    "stage-2"
  ]
},

// webpack.config.js
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

$ touch .babelrc

// .babelrc
{
  "presets": [
    "env",
    "react",
    "stage-2"
  ]
}

$ npm i -s react react-dom
$ npm i -D react-hot-loader

// webpack.config.js
entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
devServer: {
    contentBase: './dist',
    hot: true
  }

$ npm i react-redux redux redux-thunk redux-promise redux-logger -s
