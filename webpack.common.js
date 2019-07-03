/* config for all */
const config = require('./webpack.config');
const path = require('path');
const merge = require('webpack-merge');

/* loaders */
const loaders = require('./webpack/webpack.loaders');

/* plugins */
const plugins = require('./webpack/webpack.plugins');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(
    {
        mode: 'development',
        // a complete list of "stats" setting is on https://webpack.js.org/configuration/stats/
        stats: {
            // copied from `'minimal'`
            all: false,
            assets: true,
            modules: true,
            maxModules: 0,
            errors: false, // disabled errors
            warnings: false, // disabled warnings
            // our additional options
            moduleTrace: true,
            errorDetails: true
        },
        resolve: {
            extensions: ['.css', '.js', '.json'],
            modules: [
                path.resolve(__dirname, 'node_modules')
            ]
        },
        output: {
            path: path.resolve(config.path.assets)
        },
        plugins: [
            new CleanWebpackPlugin([config.path.assets + '*']),
            plugins.friendlyErrors() //,
            // plugins.imageMin(),
            // plugins.dashboard(),
            // plugins.browserSync()
        ]
    },
    loaders.loadESLint(undefined, ['/node_modules/']),
    loaders.loadJS(),
    loaders.loadCSS(),
    loaders.loadImage()
);