const path = require('path');

module.exports = {
    mode: 'production',
    entry: slsw.lib.entries,
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.ts',
            '.tsx'
        ]
    },
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js'
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ],
            }
        ]
    }
};
