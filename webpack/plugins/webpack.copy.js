/*
@link doc https://github.com/webpack-contrib/copy-webpack-plugin
 */
const config = require('../../webpack.config');
const path = require('path');
const deepmerge = require('deepmerge');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (options = []) => {
    options = deepmerge([{
        from: config.dir.src + '/images',
        to: 'images'
    }],
    options);
    return new CopyPlugin(options);
};
