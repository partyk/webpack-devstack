const DuplicatePackageChecker = require('duplicate-package-checker-webpack-plugin');

module.exports = (options) => {
    options = {
        ...{},
        ...options
    };
    return new DuplicatePackageChecker(options);
};
