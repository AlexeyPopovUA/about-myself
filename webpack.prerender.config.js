const path = require('path');

const PrerenderSPAPlugin = require('prerender-spa-plugin');
const jsdomPrerenderer = require('@prerenderer/renderer-jsdom');
const fetch = require('node-fetch');

console.log(jsdomPrerenderer);

module.exports = env => {
    console.log(env);

    const destinationPath = 'dist';

    return {
        entry: {
            index: './dist/index.html'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, destinationPath)
        },
        plugins: [
            new PrerenderSPAPlugin({
                // Required - The path to the webpack-outputted app to prerender.
                staticDir: path.join(__dirname, 'dist'),
                renderAfterDocumentEvent: 'render-event',
                // Required - Routes to render.
                routes: [ '/'],
                renderer: new jsdomPrerenderer({
                    //renderAfterElementExists: '.header',
                    //renderAfterTime: 5000,
                    injectProperty: 'fetch',
                    inject: fetch
                })
            })
        ]
    };
};
