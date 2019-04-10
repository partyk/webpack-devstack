module.exports = ({include, exclude} = {}) => ({
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js(x)?|ts|tsx|vue)$/,
                include,
                exclude,
                loader: 'eslint-loader'
            }
        ]
    }
});