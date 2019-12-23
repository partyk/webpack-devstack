module.exports = ({include, exclude} = {}) => ({
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                include,
                exclude,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/] // for support VueJS
                }
            }
        ]
    }
});