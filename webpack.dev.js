/* config for develop mode */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// plugins
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    plugins: [
        new BrowserSyncPlugin(
            // BrowserSync options
            {
                // browse to http://localhost:3000/ during development
                host: 'localhost',
                port: 3000,
                server: {
                    baseDir: ['dist']
                }
            },
            // plugin options
            {
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                reload: true
            }
        )
    ]
});