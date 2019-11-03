const config = require('../../webpack.config');

module.exports = ({include, exclude} = {}) => {
    return {
        module: {
            rules: [
                {
                    test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    include,
                    exclude,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                noquotes: true,
                                name: '[name].[contenthash].[ext]',
                                outputPath: 'fonts/',
                                publicPath: config.path.publicPathAssets + 'fonts/'
                            }
                        }
                    ]
                }
            ]
        }
    };
};