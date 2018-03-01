const path = require('path');

const PATHS = {
    source: path.join(__dirname, 'src/js'),
    build: path.join(__dirname, 'dist')
};

module.exports = {
    entry: PATHS.source + '/index.js',
    output: {
        path: PATHS.build,
        filename: '[name].js'
    }
};
