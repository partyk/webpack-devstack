/**
 * @link @link https://github.com/johnagan/clean-webpack-plugin
 * @type {CleanWebpackPlugin}
 */
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const deepmerge = require('deepmerge');
const config = require('../../webpack.config');
/**
 * plugin clean
 * @param options {array}
 * @returns {CleanWebpackPlugin}
 */
module.exports = (options = {}) => {
    options = deepmerge({
        cleanOnceBeforeBuildPatterns: [config.path.assets + '**/*']
    }, options);
    return new CleanWebpackPlugin(options);
};
