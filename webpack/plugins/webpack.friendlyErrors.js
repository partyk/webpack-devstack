const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = (options) => {
    options = {
        ...{
            clearConsole: true
        },
        ...options
    };

    return {
        stats: {
            // copied from `'minimal'`
            all: false,
            assets: false,
            modules: true,
            maxModules: 0,
            errors: false, // disabled errors
            warnings: false, // disabled warnings
            // our additional options
            moduleTrace: true,
            errorDetails: true
        },
        plugins: [
            new FriendlyErrorsWebpackPlugin(options)
        ]
    };
};