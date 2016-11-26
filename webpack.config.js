module.exports = {
  context: __dirname,
  entry: "./frontend/entry.jsx",
  output: {
    path:"./",
    filename: "bundle.js",
    publicPath: "/Frontend/"
    
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", '.jsx']
  }
};
