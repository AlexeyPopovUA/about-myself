const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = env => {
    console.log(env);

    return {
        entry: {
            index: './src/index.js'
        },
        target: "web",
        mode: env.prod ? 'production' : 'development',
        devtool: "sourcemaps",
        watch: false,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /node_modules/
        },
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new MiniCssExtractPlugin({
                filename: 'style.[contenthash].css',
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './index.html',
                filename: 'index.html'
            }),
            new WebpackMd5Hash()
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                },
                {
                    loader: "source-map-loader",
                    test: /\.js$/,
                    enforce: "pre"
                }
            ]
        }
    };
};