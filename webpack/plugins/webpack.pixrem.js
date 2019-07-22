const pixrem = require('pixrem');

module.exports = (options = {}) => {
    options = {
        ...{
            rootValue: 10
        },
        ...options
    };
    return pixrem(options);
};