const config = require('../../webpack.config');
const path = require('path');

/* modules */
const modules = require('./../modules/index');

/* plugins */
// const plugins = require('./../webpack.plugins');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                            publicPath: config.path.publicPathAssets,
                            // only enable hot in development
                            hmr: config.isDevelop,
                            // if hmr does not work, this is a forceful method.
                            reloadAll: config.isProduction
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
                        loader: 'resolve-url-loader'
                    },
                    modules.loaderPostCSS(),
                    modules.loaderIconFont(),
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: config.isDevelop
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].[hash].css',
            ignoreOrder: false // Enable to remove warnings about conflicting order
        })
    ]
});