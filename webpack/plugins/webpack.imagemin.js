/*
@link doc https://www.npmjs.com/package/image-webpack-loader
 */
const deepmerge = require('deepmerge');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = (options = {}) => {
    options = deepmerge({
        test: /\.(jpe?g|png|gif|svg)$/i
    },
    options);
    return new ImageminPlugin(options);
};