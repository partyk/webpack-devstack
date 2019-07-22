const autoprefixer = require('autoprefixer');

module.exports = (options = {}) => {
    options = {
        ...{
            grid: true
        },
        ...options
    };
    return autoprefixer(options);
};