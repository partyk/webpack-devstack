module.exports = ({include, exclude} = {}) => ({
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                exclude: /node_modules|bower_components/,
                loader: 'ts-loader',
                options: {
                    // appendTsSuffixTo: [/\.vue$/] // for support VueJS
                }
            }
        ]
    }
});