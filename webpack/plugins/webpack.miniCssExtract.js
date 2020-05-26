const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (options = {}) => {
    return new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/chunks/[id].[hash].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order,
        ...options
    });
};