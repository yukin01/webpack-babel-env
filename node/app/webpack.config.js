const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', { 'modules': false }]
              ]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: __dirname,
    host: "0.0.0.0",
    port: 3000
  }
}