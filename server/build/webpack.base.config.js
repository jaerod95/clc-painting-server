var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

var nodeModules = {};
fs.readdirSync(resolve('node_modules'))
  .filter(x => {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(mod => {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  context: path.resolve(__dirname, '../src/'),
  entry: './index.js',
  devtool: 'hidden-source-map',
  target: 'node',
  mode: 'production',
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src/'),
      Root: path.resolve(__dirname, '../'),
    },
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    path: resolve('dist'),
    filename: 'index.js',
    sourceMapFilename: 'index.js.map',
  },
  externals: nodeModules,
};
