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
### Install about webpack config.
```
$ npm i -D html-webpack-plugin
$ npm i -D webpack-merge
$ npm i -D uglifyjs-webpack-plugin
$ npm i -D clean-webpack-plugin
```
**webpack-merge** use for merge file *webpack.common.js* with *webpack.dev.js* and *webpack.prod.js*
**clean-webpack-plugin** use for clean/remove 'dist' folder that you built before *npm start*
**uglifyjs-webpack-plugin** use for ***Minification***

