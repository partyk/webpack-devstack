const TerserPlugin = require('terser-webpack-plugin');

module.exports = ({options, include, exclude} = {}) => {
    options = {
        ...{
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
            safari10: false
        },
        ...options
    };
    return new TerserPlugin({
        include,
        exclude,
        test: /\.js(\?.*)?$/i,
        terserOptions: options
    });
};
