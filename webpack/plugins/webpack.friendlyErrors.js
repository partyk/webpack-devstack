const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = (options) => {
    options = {
        ...{
            clearConsole: true
        },
        ...options
    };
    return new FriendlyErrorsWebpackPlugin(options);
};