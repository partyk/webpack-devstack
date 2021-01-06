const config = require('../../webpack.config');

/* modules */
const modules = require('./../modules/index');

/* plugins */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({include, exclude} = {}) => ({
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
                            publicPath: config.path.publicPathAssets,
                            // only enable hot in development
                            hmr: config.isDevelop,
                            // if hmr does not work, this is a forceful method.
                            reloadAll: config.isProduction,
                        },
                    },
                    // 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 4,
                            sourceMap: config.isDevelop,
                        },
                    },
                    modules.loaderPostCSS(),
                ],
            },
        ],
    },
});
