/*
@link doc https://www.npmjs.com/package/webpack-bundle-analyzer
 */
const deepmerge = require('deepmerge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = (options = {}) => {
    options = deepmerge({
        name: 'compile'
    }, options);
    return new BundleAnalyzerPlugin(options);
};
