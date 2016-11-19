const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            { test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
}