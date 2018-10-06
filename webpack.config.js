const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {GenerateSW} = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = env => {
    console.log(env);

    const mode = env.prod ? 'production' : 'development';
    const destinationPath = env.release ? 'docs' : 'dist';
    const watch = !env.release;

    return {
        entry: {
            index: './src/index.jsx'
        },
        target: "web",
        mode,
        devtool: "sourcemaps",
        watch,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /node_modules/
        },
        devServer: {
            contentBase: './dist',
            port: 9000
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, destinationPath)
        },
        plugins: [
            new CleanWebpackPlugin([destinationPath]),
            new MiniCssExtractPlugin({
                filename: '[name].css'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './index.html',
                filename: 'index.html'
            }),
            new GenerateSW({
                clientsClaim: true,
                skipWaiting: true,
                runtimeCaching: [
                    {
                        urlPattern: new RegExp('.*\.(js|css|html|png|json)'),
                        handler: 'networkFirst'
                    },
                    {
                        urlPattern: new RegExp('^https://api.github.com/gists/.*'),
                        handler: 'networkFirst'
                    }
                ]
            }),
            new CopyWebpackPlugin([
                {from: './manifest.json', to: `./manifest.json`, flatten: true},
            ])
        ],
        module: {
            rules: [
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        {loader: 'style-loader'},
                        {loader: MiniCssExtractPlugin.loader},
                        {loader: 'css-loader'},
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: ["./styles"]
                            }
                        }
                    ]
                },
                {
                    loader: "source-map-loader",
                    test: /\.jsx$/,
                    enforce: "pre"
                }
            ]
        }
    };
};
