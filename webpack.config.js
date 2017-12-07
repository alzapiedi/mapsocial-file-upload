module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: './public/app.js'
  },
  devtool: 'source-map',
  resolve: {
    modules: ['./', 'node_modules']
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
