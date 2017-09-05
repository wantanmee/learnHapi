const Path = require('path');

module.exports = {
    entry: './server.js',
    output: {
        path: Path.join(__dirname, 'output'),
        publicPath: '/output/',
        filename: 'index.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: Path.join(__dirname, 'node_modules'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015-node6/object-rest'],
                    // plugins: [
                    //     'babel-plugin-transform-es2015-destructuring',
                    //     'transform-object-rest-spread',
                    // ],
                },
            },
        ],
    },
};
