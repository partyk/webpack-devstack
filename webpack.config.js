const path = require('path');
const isProduction = require('./webpack/libs/isProduction');
const pkg = require('./package.json');
const config = {
    pkg,
    isProduction: isProduction(),
    isDevelop: !isProduction(),
    dir: {
        src: 'src',
        dist: 'dist'
    },
    path: {
        src: path.resolve(__dirname, 'src'),
        dist: path.resolve(__dirname, 'dist'),
        temp: path.resolve(__dirname, 'temp/webpack'),
        assets: path.resolve(__dirname, 'dist/assets'),
        publicPath: '/',
        publicPathAssets: '/assets/'
    }
};

module.exports = config;