const merge = require('webpack-merge');
const common = require('./webpack.common.js');

/* plugins */
const TerserPlugin = require('terser-webpack-plugin');

const terserOptions = {
    ecma: undefined,
    warnings: false,
    parse: {},
    compress: {},
    mangle: true, // Note `mangle.properties` is `false` by default.
    module: false,
    output: null,
    toplevel: false,
    nameCache: null,
    ie8: false,
    keep_classnames: undefined,
    keep_fnames: false,
    safari10: false,
};

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin({
                // exclude: /\/excludes/,
                test: /\.js(\?.*)?$/i,
                terserOptions
            }),
        ],
    },
    plugins: []
});