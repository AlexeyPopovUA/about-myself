//const fs = require('fs');
//const util = require('util');

//const readFile = util.promisify(fs.readFile);

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
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

JSDOM.fromFile('./dist/index.html',{runScripts: 'dangerously', virtualConsole, resources: "usable"})
    .then(dom => {
        setTimeout(() => console.log(dom.serialize()), 2000);
    })
    .catch(console.error);
