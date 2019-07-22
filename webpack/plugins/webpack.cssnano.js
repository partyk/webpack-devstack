const cssnano = require('cssnano');

module.exports = (options = {}) => {
    options = {
        ...{
            preset: ['default', {
                discardComments: {
                    removeAll: true
                }
            }]
        },
        ...options
    };
    return cssnano(options);
};