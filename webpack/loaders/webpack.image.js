const config = require('../../webpack.config');

console.log(process.env.NODE_ENV);

module.exports = ({include, exclude} = {}) => ({
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/,
                include,
                exclude,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 100,
                            name: 'style/[name].[contenthash].[ext]',
                            outputPath: 'images/',
                            publicPath: config.path.publicPathAssets + 'images/'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            // bypassOnDebug: true, // webpack@1.x
                            // disable: true, // webpack@2.x and newer
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            // the webp option will enable WEBP
                            webp: {
                                enabled: true, // false -> enabled convert other of images to WEBP format
                                quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    }
});