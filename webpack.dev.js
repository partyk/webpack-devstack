/* config for develop mode */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    }
});