import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/client/index.html',
    filename: './index.html',
});

export default {
    entry: './src/client/index.tsx',
    output: {
        filename: 'index.js',
        path: `${__dirname}/dist/client`,

    },
    devServer: {
        port: 8080,
        watchOptions: {
            poll: true,
            ignored: /node_modules/,
        }
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be
            // handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
            },
        },
    },
    plugins: [
        htmlPlugin
    ]
}