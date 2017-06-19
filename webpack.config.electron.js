module.exports = {
    entry: './src/main/main.js',
    output: {
        path: __dirname,
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    target: 'electron-main'
};