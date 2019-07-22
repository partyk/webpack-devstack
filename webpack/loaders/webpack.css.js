const config = require('../../webpack.config');
const path = require('path');

/* plugins */
const plugins = require('./../webpack.plugins');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({include, exclude} = {}) => ({
    entry: {
        style: path.resolve(config.path.src, 'css/src/style.css')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
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
                            sourceMap: config.isDevelop
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: config.isDevelop,
                            plugins: [
                                plugins.postCSSDiscardDuplicates(),
                                plugins.pixrem(),
                                plugins.prefixer(),
                                ...(config.isProduction ? [plugins.cssnano()] : [])
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
});