const config = require('../../webpack.config');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log(path.resolve(config.path.dist, '[name].css'));

module.exports = ({include, exclude} = {}) => ({
    entry: {
        style: path.resolve(config.path.src, 'css/src/style.css')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include,
                exclude,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: config.path.publicPathAssets
                        }
                    },
                    // 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 4
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
});