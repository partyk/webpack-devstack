/* config for develop mode */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

/* globals */
// global.isProduction = true;

/* loaders */
// const loaders = require('./webpack/webpack.loaders');

/* plugins */
const plugins = require('./webpack/plugins/index');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    plugins: [
        plugins.bundleAnalyzer() //,
        // plugins.dashboard()
        // plugins.browserSync()
    ]
});
