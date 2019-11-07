const config = {
    dir: {
        src: 'src',
        dist: 'dist'
    },
    path: {
        src: path.resolve(__dirname, 'src'),
        dist: path.resolve(__dirname, 'dist'),
        temp: path.resolve(__dirname, 'temp/webpack'),
        assets: path.resolve(__dirname, 'dist/assets'),
        node_modules: path.resolve(__dirname, 'node_modules'),
        publicPath: '/',
        publicPathAssets: '/assets/'
    }
};

module.exports = config;
