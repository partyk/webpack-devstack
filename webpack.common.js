/* config for all */
const config = require('./webpack.config');
const path = require('path');
const {merge} = require('webpack-merge');

/* loaders */
const loaders = require('./webpack/loaders/index');

/* plugins */
const plugins = require('./webpack/plugins/index');

module.exports = merge(
    {
        mode: 'development',
        // a complete list of "stats" setting is on https://webpack.js.org/configuration/stats/
        resolve: {
            extensions: ['.vue', '.css', '.tsx', '.ts', '.js', '.json'],
            modules: [
                path.resolve(__dirname, 'node_modules')
            ]
        },
        output: {
            path: path.resolve(config.path.assets)
        },
        plugins: [
            plugins.clean(),
            plugins.copy(),
            plugins.miniCssExtract(),
            plugins.imageMin(),
            plugins.iconFont(),
            plugins.webpackBar(),
            plugins.duplicatePackageChecker(),
            plugins.vueLoader()
        ]
    },
    loaders.loadESLint({
        exclude: [
            path.resolve(__dirname, 'node_modules')
        ]
    }),
    loaders.loadTypeScript(),
    loaders.loadVueJs(),
    loaders.loadJS(),
    loaders.loadCss(),
    loaders.loadScss(),
    loaders.loadLess(),
    loaders.loadImage(),
    loaders.loadFonts({
        include: [
            path.resolve(__dirname, 'src/icons'),
            path.resolve(__dirname, 'src/fonts')
        ]
    })
);
