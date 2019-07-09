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
                        loader: 'url-loader',
                        options: {
                            limit: 10 * 1024,
                            noquotes: true,
                            fallback: 'file-loader',
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
                            optipng: {
                                enabled: true
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            // added settings of webp enabled convert all formats image to WEBP format
                            webp: false // disabled webp
                        }
                    }
                ]
            }
        ]
    }
});