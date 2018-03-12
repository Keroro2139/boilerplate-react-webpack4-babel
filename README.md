# boilerplate-react-webpack4-babel
$ npm init -y
$ mkdir dist
$ cd dist
$ touch index.html
$ npm i -D webpack webpack-dev-server webpack-cli

// package.json
...
"scripts": {
  "start": "webpack-dev-server --config ./webpack.config.js --mode development",
  ...
},
...
$ touch webpack.config.js
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
