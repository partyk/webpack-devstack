/* config for develop mode */
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

/* globals */
// global.isProduction = true;

/* loaders */
// const loaders = require('./webpack/webpack.loaders');

/* plugins */
const plugins = require('./webpack/plugins/index');

module.exports = merge(common, {
    mode: 'development',
    stats: {
        // copied from `'minimal'`
        all: false,
        assets: false,
        modules: true,
        maxModules: 0,
        errors: false, // disabled errors
        warnings: false, // disabled warnings
        // our additional options
        moduleTrace: true,
        errorDetails: true
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    plugins: [
        plugins.friendlyErrors(),
        plugins.bundleAnalyzer() //,
        // plugins.dashboard()
        // plugins.browserSync()
    ]
});
