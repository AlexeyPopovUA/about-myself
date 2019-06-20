const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {GenerateSW} = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const jsdomRenderer = require('@prerenderer/renderer-jsdom');

const Renderer = jsdomRenderer;

module.exports = env => {
    console.log(env);

    const mode = env.prod ? 'production' : 'development';
    const destinationPath = 'dist';
    const watch = env.watch === true;

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
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ["**/*"],
                dangerouslyAllowCleanPatternsOutsideProject: true,
                dry: false
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './index.html',
                filename: 'index.html',
                PRODUCTION: !!env.release,
                GOOGLE_ANALYTICS_SCRIPT: !!env.release ?
                    "<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-127711409-3\"></script>" : ""
            }),
            new CopyWebpackPlugin([
                {from: './manifest.json', to: "./", flatten: true},
                {from: './data/data.json', to: "./", flatten: true},
                {from: './images', to: "./"},
            ]),
            ...(!watch ? [new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'),
                outputDir: path.join(__dirname, 'dist'),
                routes: ['/'],
                renderer: new Renderer({
                    maxConcurrentRoutes: 4,
                    renderAfterElementExists: '.cv-section.more',
                    headless: true
                })
            })] : []),
            new GenerateSW({
                include: [
                    //DO NOT cache HTMLs in watch mode -> you always need it to be up-to-date
                    //todo keep an eye on it on deployment environments
                    ...(env.watch === true ? [] : [/\.html$/]),
                    /\.js$/, /\.css$/, /\.json$/, /\.png/, /\.svg/, /\.ico/, /\.ttf/, /\.otf/, /\.eot/, /\.woff?/
                ],
                swDest: `service-worker.js`,
                importWorkboxFrom: "local",
                offlineGoogleAnalytics: env.release === true,
                cleanupOutdatedCaches: true,
                // sw pre-caching needs to ignore url parameters in order to recognize "home" url
                // and respond with "./dist/index.html"
                ignoreURLParametersMatching: [/./],
                runtimeCaching: [
                    {
                        urlPattern: new RegExp('.+w3schools.+\.css'),
                        handler: 'CacheFirst'
                    },
                    {
                        urlPattern: new RegExp('.+manifest\.json'),
                        handler: 'NetworkFirst'
                    },
                    {
                        urlPattern: new RegExp('.+\.(js|css|html|png|json)'),
                        handler: 'NetworkFirst'
                    }
                ]
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)/*,
            new BundleAnalyzerPlugin()*/
        ],
        resolve: {
            extensions: ['.js', '.mjs'],
            // todo Resolve the problem with mjs import from node_modules
            mainFields: ["main", "module"]
        },
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
