/*
@link doc https://www.npmjs.com/package/imagemin-webpack-plugin
 */
const config = require('../../webpack.config');
const path = require('path');
const deepmerge = require('deepmerge');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = (options = {}) => {
    options = deepmerge({
        test: /\.(jpe?g|png|gif|svg)$/i,
        minFileSize: 10 * 1024, // Only apply this one to files equal to or more 10kb
        cacheFolder: path.resolve(config.path.temp, 'images'),
        optipng: {
            enabled: true
        },
        pngquant: ({
            quality: '65-90',
            speed: 4
        }),
        gifsicle: {
            interlaced: false
        },
        svgo: {
            plugins: [{
                removeViewBox: false,
                removeEmptyAttrs: true
            }],
        },
        jpegtran: {
            progressive: true
        },
        plugins: [
            imageminMozjpeg({
                progressive: true,
                quality: 65
            })
        ]
    },
    options);
    return new ImageminPlugin(options);
};