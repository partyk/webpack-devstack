module.exports = ({include, exclude} = {}) => ({
    module: {
        rules: [
            {
                test: /\.vue$/,
                include,
                exclude,
                loader: 'vue-loader',
                options: {}
            }
        ]
    }
});