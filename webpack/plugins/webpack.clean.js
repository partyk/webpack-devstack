/**
 * @link @link https://github.com/johnagan/clean-webpack-plugin
 * @type {CleanWebpackPlugin}
 */
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const deepmerge = require('deepmerge');
const config = require('../../webpack.config');
/**
 * plugin clean
 * @param options {object}
 * @returns {CleanWebpackPlugin}
 */
module.exports = (options = {}) => {
    options = deepmerge({
        // cleanStaleWebpackAssets: false,
        protectWebpackAssets: false
    }, options);
    return new CleanWebpackPlugin(options);
};
