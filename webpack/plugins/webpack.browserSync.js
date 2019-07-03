const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = (options) => {
    options = {
        ...{
            browserSync: {
                // browse to http://localhost:3000/ during development
                host: 'localhost',
                port: 3000,
                server: {
                    baseDir: ['dist']
                }
            },
            plugin: {
                // plugin options
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                reload: true
            }
        },
        ...options
    };
    return new BrowserSyncPlugin(options.browserSync, options.plugin);
};