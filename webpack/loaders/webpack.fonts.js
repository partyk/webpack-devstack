const config = require('../../webpack.config');

module.exports = ({include, exclude} = {}) => ({
    module: {
        rules: [
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                include,
                exclude,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // noquotes: true,
                            fallback: 'file-loader',
                            name: '[name].[contenthash].[ext]',
                            outputPath: 'fonts/',
                            publicPath: config.path.publicPathAssets + 'fonts/'
                        }
                    }
                ]
            }
        ]
    }
});