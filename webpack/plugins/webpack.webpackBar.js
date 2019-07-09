/*
@link doc https://github.com/nuxt/webpackbar
 */
const deepmerge = require('deepmerge');
const WebpackBar = require('webpackbar');

module.exports = (options = {}) => {
    options = deepmerge({
        name: 'compile'
    }, options);
    return new WebpackBar(options);
};