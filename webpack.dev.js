const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
};

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: PATHS.build,
        compress: true,
        host: '0.0.0.0',
        stats: 'errors-only'
    }
});