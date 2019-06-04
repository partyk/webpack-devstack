const config = require('../../webpack.config');

module.exports = ({include, exclude} = {}) => ({
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                include,
                exclude,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[contenthash].[ext]',
                            outputPath: 'images/',
                            publicPath: config.path.publicPathAssets + 'images/'
                        }
                    }
                ]
            }
        ]
    }
});