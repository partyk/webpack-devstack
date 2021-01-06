const config = require('../../webpack.config');

module.exports = ({include, exclude} = {}) => ({
    output: {
        filename: 'js/[name].js',
        publicPath: config.path.publicPathAssets, // nastaveni cesty k chunkum
        chunkFilename: 'js/chunks/[name].[contenthash].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                include,
                exclude,
                use: ['babel-loader'],
            },
        ],
    },
});
