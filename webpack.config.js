var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

module.exports = {
  entry : './main.js',
  resolve: {
      alias: {
        'react': pathToReact, //usar a versao min
        'react-dom': pathToReactDOM //usar a versao min
      }
  },
  output : {
    path : './',
    filename : 'index.js'
  },
  devServer : {
    inline: true,
    port: 1111
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loader : 'babel'
      }
    ],
    noParse: [pathToReact] //evitar que 'compile' toda vez esses scripts que ja sao consolidados
  }
}
