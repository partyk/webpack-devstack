/* config for all */
const path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.json'],
        modules: [
            path.resolve(__dirname, "node_modules")
        ],
    },
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: '[name].js',
        publicPath: '/assets/js/', //nastaveni cesty k chunkum
        chunkFilename: 'chunks/[name].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules|bower_components/,
                use: ['babel-loader','eslint-loader']
            },
        ],
    }
};