const pathLib = require('path')

module.exports = {
    entry: pathLib.join(__dirname, '/src/client/index.js'),
    output: {
        path: pathLib.join(__dirname, '/src/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}