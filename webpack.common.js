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
                path.resolve(__dirname, 'node_modules'),
            ],
        },
        entry: {
            'main': path.resolve(config.path.src, 'js/src/index.js'),
            'style-scss': path.resolve(config.path.src, 'scss/src/style.scss'),
        },
        output: {
            path: path.resolve(config.path.assets),
        },
        /* alias: {
            '@images': path.resolve(__dirname, 'src/images'),
            '@ui': path.resolve(__dirname, 'src'),
            '@node_modules': path.resolve(__dirname, config.dir.node_modules),
        }, */
        plugins: [
            plugins.clean(),
            plugins.copy(),
            plugins.miniCssExtract(),
            plugins.imageMin(),
            plugins.iconFont(),
            plugins.webpackBar(),
            plugins.duplicatePackageChecker(),
        ],
    },
    loaders.loadESLint({
        exclude: [
            path.resolve(__dirname, 'node_modules'),
        ],
    }),
    loaders.loadTypeScript(),
    loaders.loadJS(),
    loaders.loadCss(),
    loaders.loadScss(),
    // loaders.loadLess(),
    loaders.loadImage(),
    loaders.loadFonts({
        include: [
            path.resolve(__dirname, 'src/icons'),
            path.resolve(__dirname, 'src/fonts'),
        ],
    }),
);
