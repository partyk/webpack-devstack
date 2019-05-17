/* config for develop mode */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

/* loaders */
// const loaders = require('./webpack/webpack.loaders');

/* plugins */
const plugins = require('./webpack/webpack.plugins');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    }
});