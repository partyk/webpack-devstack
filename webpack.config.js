const path = require('path');
const config = {
    path: {
        src: path.resolve(__dirname, 'src'),
        dist: path.resolve(__dirname, 'dist'),
        assets: path.resolve(__dirname, 'dist/assets'),
        publicPath: '/',
        publicPathAssets: '/assets/'
    }
};

module.exports = config;