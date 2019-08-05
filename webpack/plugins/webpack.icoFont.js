/**
 * icon-font-loader
 * @plugin
 * @link https://github.com/vusion/icon-font-loader
 * @type {{path, isProduction, isDevelop, dir, pkg}}
 */

const config = require('../../webpack.config');
const IconFontPlugin = require('icon-font-loader').Plugin;

module.exports = (options = {}) => {
    options = {
        ...{
            filename: '[name].[hash].[ext]',
            localCSSTemplate: `font-family: {{ fontName }};speak: none;font-style: normal;font-weight: normal;font-variant: normal;text-transform: none;line-height: 1;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;`,
            output: './fonts',
            publicPath: config.path.publicPathAssets + 'fonts/'
        },
        ...options
    };
    return new IconFontPlugin(options);
};