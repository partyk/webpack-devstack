/* config for all */
const path = require('path');
const merge = require('webpack-merge');

/* loaders */
const loaders = require('./webpack/webpack.loaders');

/* plugins */
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(
    {
        mode: 'development',
        resolve: {
            extensions: ['.js', '.json'],
            modules: [
                path.resolve(__dirname, 'node_modules')
            ]
        },
        entry: {
            main: path.resolve(__dirname, 'src/index.js')
        },
        output: {
            path: path.resolve(__dirname, 'dist/assets'),
            filename: '[name].js',
            publicPath: '/assets/js/', // nastaveni cesty k chunkum
            chunkFilename: 'chunks/[name].[contenthash].chunk.js'
        },
        plugins: [
            new CleanWebpackPlugin(['dist/assets/*'])
        ]
    },
    loaders.loadESLint(undefined, ['/node_modules/']),
    loaders.loadJS()
);