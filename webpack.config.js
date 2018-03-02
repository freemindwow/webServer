const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
};

module.exports = {
    entry: {
      app: [
        PATHS.source + '/js/index.js',
        PATHS.source + '/sass/main.scss'
      ]
    },
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ['css-loader']
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("[name].css"),
    ]
};
