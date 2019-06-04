const config = require('../../webpack.config');
const path = require('path');

module.exports = ({include, exclude} = {}) => ({
    entry: {
        main: path.resolve(config.path.src, 'js/src/index.js')
    },
    output: {
        filename: 'js/[name].js',
        publicPath: config.path.publicPathAssets, // nastaveni cesty k chunkum
        chunkFilename: 'js/chunks/[name].[contenthash].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                include,
                exclude,
                use: ['babel-loader']
            }
        ]
    }
});