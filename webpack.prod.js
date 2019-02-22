const merge = require('webpack-merge');
const common = require('./webpack.common.js');

/* plugins */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/* config */
const configUglify = {
    /*
    compress: {

    },
    output: {
        // output options
    },
    sourceMap: {
        // source map options
    },
    parse: {
        // parse options
    },
    mangle: true,
    ecma: 5, // specify one of: 5, 6, 7 or 8
    keep_classnames: false,
    keep_fnames: false,
    ie8: false,
    nameCache: null, // or specify a name cache object
    safari10: false,
    toplevel: false,
    warnings: false,
    unsafe: false,
    */
};

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: configUglify
        })
    ]
});