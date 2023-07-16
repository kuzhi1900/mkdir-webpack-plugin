const path = require('path')
const MkdirWebpackPlugin = require('./dist/mkdir-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'mkdir-webpack-plugin.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  target: 'node',
  externals: [],
  resolve: {
    extensions: ['.js', '.json']
  },
  mode: 'production',
  plugins: [
    new MkdirWebpackPlugin(
      []
    )
  ]
}
