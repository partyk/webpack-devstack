const config = require('../../webpack.config');

/* plugins */
const plugins = require('./../webpack.plugins');

module.exports = () => ({
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
});