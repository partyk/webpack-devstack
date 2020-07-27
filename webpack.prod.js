const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const plugins = require('./webpack/plugins/index');

/* globals */
global.isProduction = true;

module.exports = merge(common, {
    mode: 'production',
    // https://webpack.js.org/configuration/performance/
    performance: {
        hints: 'warning'
    },
    stats: {
        assets: false
    },
    optimization: {
        minimizer: [
            /* new TerserPlugin({
                // exclude: /\/excludes/,
                test: /\.js(\?.*)?$/i,
                terserOptions
            }) */
            plugins.terser()
        ]
    },
    plugins: []
});
