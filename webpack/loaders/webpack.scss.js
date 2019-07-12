const config = require('../../webpack.config');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log(path.resolve(config.path.dist, '[name].css'));

module.exports = ({include, exclude} = {}) => ({
    entry: {
        'style-scss': path.resolve(config.path.src, 'scss/src/style.scss')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                include,
                exclude,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: config.path.publicPathAssets
                        }
                    },
                    // 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 4,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css'
        })
    ]
});