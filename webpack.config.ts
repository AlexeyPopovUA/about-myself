const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {GenerateSW} = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require("webpack-pwa-manifest");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SitemapWebpackPlugin = require('sitemap-webpack-plugin').default;
const ESLintPlugin = require("eslint-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const babelPlugins = require("./babel.config").plugins;


module.exports = env => {
    console.log(env);
    const mode = env.prod ? "production" : "development";
    const destinationPath = "dist";
    const watch = !!env.WEBPACK_SERVE;
    const DEBUG = mode === "development";
    const RELEASE = env.release === "release";
    const baseUrl = "/";

    return {
        //stats: 'verbose',
        stats: {
            children: true
        },
        entry: {
            index: './src/index.tsx'
        },
        target: "web",
        mode,
        devtool: "source-map",
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /node_modules/
        },
        devServer: {
            devMiddleware: {
                writeToDisk: true
            },
            port: 9000,
            // supports browser routing like "/this/is/browser/route"
            historyApiFallback: true,
            // Hot Module Reloading (HMR) is always enabled in the watch mode
            hot: watch,
            compress: true,
            client: {
                logging: "info",
                progress: true,
                reconnect: 5,
                overlay: {
                    errors: true
                }
            }
        },
        output: {
            filename: '[name].[contenthash].js',
            chunkFilename: "[name].[chunkhash].bundle.js",
            path: path.resolve(__dirname, destinationPath),
            publicPath: "/"
        },
        resolve: {
            extensions: [".js", ".ts", ".tsx", ".scss", ".css", ".json"]
        },
        plugins: [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ["**/*"],
                dangerouslyAllowCleanPatternsOutsideProject: true,
                dry: false
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css'
            }),
            
            new HtmlWebpackPlugin({
                inject: true,
                title: "Oleksii Popov",
                favicon: "./images/icons/main-36x36.png",
                template: './index.html',
                filename: 'index.html',
                minify: !DEBUG
                    ? {
                        collapseWhitespace: true,
                        collapseInlineTagWhitespace: true,
                        removeComments: true,
                        removeRedundantAttributes: true
                    }
                    : false,
                PRODUCTION: !!env.release,
                GOOGLE_ANALYTICS_SCRIPT: !!env.release ?
                    "<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-2SX0978G4B\"></script>" : "",
                meta: {
                    charset: {
                        charset: "UTF-8"
                    },
                    viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
                    compatible: {
                        "http-equiv": "X-UA-Compatible",
                        content: "IE=edge"
                    }
                },
                metadata: {
                    baseUrl
                }
            }),
            new CopyWebpackPlugin({
                patterns:[
                    {from: './images'},
                ]
            }),
            new WebpackPwaManifest({
                name: "About Myself",
                short_name: "My CV",
                fingerprints: true,
                inject: true,
                lang: "en-US",
                start_url: "/index.html",
                includeDirectory: true,
                display: "standalone",
                theme_color: "#009688",
                background_color: "#009688",
                crossorigin: null,
                ios: true,
                icons: [
                    {
                        src: path.join(__dirname, "images/icons/main-512x512.png"),
                        sizes: [36, 48, 72, 96, 144, 180, 192, 512],
                        destination: "resources/favicon",
                        ios: true
                    },
                    {
                        src: path.resolve("images/icons/main-512x512.png"),
                        size: 1024,
                        destination: "resources/favicon",
                        ios: "startup"
                    },
                    {
                        src: path.join(__dirname, "images/icons/main-512x512.png"),
                        sizes: [512],
                        purpose: "maskable",
                        destination: "resources/favicon"
                    }
                ]
            }),
            // ...(!watch ? [new PrerenderSPAPlugin({
            //     staticDir: path.join(__dirname, 'dist'),
            //     outputDir: path.join(__dirname, 'dist'),
            //     routes: ['/'],
            //     renderer: new Renderer({
            //         //maxConcurrentRoutes: 4,
            //         //renderAfterElementExists: '.footer',
            //         //headless: true
            //     })
            // })] : []),
            //It's a Workbox service worker plugin
            //@see https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
            ...(!watch
                ? [
                    new GenerateSW({
                        include: [
                            /\.js$/,
                            /\.css$/,
                            /\.json$/,
                            /\.png$/,
                            /\.jpg$/,
                            /\.ico$/
                        ],
                        // update SW often when not a release
                        swDest: `service-worker.js`,
                        sourcemap: true,
                        cleanupOutdatedCaches: true,
                        // See https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#clientsclaim
                        clientsClaim: !RELEASE,
                        ignoreURLParametersMatching: [/.*/],
                        runtimeCaching: [
                            {
                                urlPattern: new RegExp(".+.woff(2)?"),
                                handler: "CacheFirst"
                            },
                            {
                                urlPattern: new RegExp(".+.png"),
                                handler: "CacheFirst"
                            },
                            {
                                urlPattern: new RegExp('.+w3schools.+\.css'),
                                handler: "StaleWhileRevalidate"
                            }
                        ]
                    })
                ]
                : []),
            new SitemapWebpackPlugin({
                base: 'https://www.oleksiipopov.com',
                paths: [{
                    path: "/",
                    lastMod: new Date().toISOString().slice(0, 10),
                    changeFreq: 'weekly',
                    priority: 0.7
                }]

            }),
            new webpack.IgnorePlugin({
                resourceRegExp: /^\.\/locale$/,
                contextRegExp: /moment$/,
            }),
            new webpack.DefinePlugin({
                DEBUG,
                RELEASE
            }),
            new ESLintPlugin(),
            ...(watch ? [new ReactRefreshWebpackPlugin()]: []),/*,
            new BundleAnalyzerPlugin()*/
        ],
        module: {
            rules: [
                {
                    test: /\.(js|ts|tsx)$/,
                    include: path.resolve("./src"),
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                                configFile: path.resolve(__dirname, "babel.config.js"),
                                plugins: watch ? [...babelPlugins, require.resolve('react-refresh/babel')] : babelPlugins,
                            }
                    }
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif|woff(2)?|ttf|eot|otf)$/,
                    include: [
                        path.resolve("./src"),
                        path.resolve("./resources"),
                        path.resolve("./sass")
                    ],
                    use: [
                        {
                            loader: "file-loader"
                        }
                    ]
                },
                {
                    test: /\.(scss|css)$/,
                    use: [
                        // HMR is working only with style-loader, but not with MiniCssExtractPlugin.loader (not sure why)
                        DEBUG ? "style-loader" : MiniCssExtractPlugin.loader,
                        { loader: "css-loader" },
                        {
                            loader: "sass-loader",
                            options: {
                                sassOptions: {
                                    includePaths: ["./sass"]
                                }
                            }
                        },
                        { loader: "postcss-loader" }
                    ]
                },
                {
                    test: /\.svg$/,
                    include: [
                        path.resolve("./src"),
                        path.resolve("./resources"),
                        path.resolve("./sass")
                    ],
                    use: ["@svgr/webpack", "url-loader"]
                }
            ]
        }
    };
};
