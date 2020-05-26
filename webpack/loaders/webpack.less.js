const config = require('../../webpack.config');
const path = require('path');

/* modules */
const modules = require('./../modules/index');

/* plugins */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({include, exclude} = {}) => ({
    entry: {
        'style-less': path.resolve(config.path.src, 'less/style.less')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
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
                    modules.loaderPostCSS(),
                    {
                        loader: 'resolve-url-loader',
                        /* options: {
                            removeCR: true
                        }, */
                    },
                    // modules.loaderIconFont(),
                    {
                        loader: 'less-loader',
                        options: {
                            paths: [
                                config.path.node_modules,
                                config.path.src
                            ],
                            sourceMap: config.isDevelop
                        }
                    }
                ]
            }
        ]
    }
});
