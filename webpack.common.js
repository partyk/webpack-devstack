/* config for all */
const path = require('path');
/* plugins */
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
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
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js(x)?|ts|tsx|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js(x)?$/,
                // exclude: /node_modules|bower_components/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/assets/*'])
    ]
};