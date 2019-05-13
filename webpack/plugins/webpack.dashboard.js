const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = (options) => {
    options = {
        ...{
            port: 3000
        },
        ...options
    };
    return {
        plugins: [
            new DashboardPlugin(options)
        ]
    };
};