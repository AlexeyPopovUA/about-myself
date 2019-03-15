//TODO Transform all that shame into a proper webpack plugin since existing ones do not work

const fs = require('fs');
const util = require('util');
const jsdom = require('jsdom');
const minify = require('html-minifier').minify;

const writeFile = util.promisify(fs.writeFile);

const {JSDOM} = jsdom;
const virtualConsole = new jsdom.VirtualConsole();

virtualConsole.on('error', (...args) => {
    console.log('error', args);
});
virtualConsole.on('warn', (...args) => {
    console.log('warn', args);
});
virtualConsole.on('info', (...args) => {
    console.log('info', args);
});
virtualConsole.on('dir', (...args) => {
    console.log('dir', args);
});

const sourceHtml = './dist/index.html';
const destinationHtml = './dist/index.html';
const timeout = 2000;

JSDOM.fromFile(sourceHtml, {runScripts: 'dangerously', virtualConsole, resources: 'usable'})
    //rendering
    .then(dom => new Promise((resolve, reject) => setTimeout(() => {
        try {
            resolve(dom.serialize());
        } catch (e) {
            reject(e);
        }
    }, timeout)))
    //minification
    .then(content => minify(content, {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeTagWhitespace: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true
    }))
    //writing result to file
    .then(content => writeFile(destinationHtml, content, 'utf8'))
    .catch(console.error);
