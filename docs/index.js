!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=38)}([function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),s=null,a=0,c=[],l=n(10);function u(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(h(o.parts[s],t))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(h(o.parts[s],t));r[o.id]={id:o.id,refs:1,parts:a}}}}function f(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function d(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertAt.before,n);n.insertBefore(t,o)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),d(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function h(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=a++;n=s||(s=v(t)),r=w.bind(null,n,c,!1),o=w.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),d(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){p(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return u(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var s=n[i];(a=r[s.id]).refs--,o.push(a)}e&&u(f(e,t),t);for(i=0;i<o.length;i++){var a;if(0===(a=o[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete r[a.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t,n){e.exports=n.p+"472739dfb5857b1f659f4c4c6b4568d0.png"},function(e,t,n){var r=n(3),o=n(4),i="undefined"==typeof window?n(6):window,s=i.document,a=i.Text;function c(){var e=[];function t(){var t=[].slice.call(arguments),n=null;function i(t){var c;if(null==t);else if("string"==typeof t)n?n.appendChild(c=s.createTextNode(t)):function(e){var t=r(e,/([\.#]?[^\s#.]+)/);/^\.|#/.test(t[1])&&(n=s.createElement("div")),u(t,function(e){var t=e.substring(1,e.length);e&&(n?"."===e[0]?o(n).add(t):"#"===e[0]&&n.setAttribute("id",t):n=s.createElement(e))})}(t);else if("number"==typeof t||"boolean"==typeof t||t instanceof Date||t instanceof RegExp)n.appendChild(c=s.createTextNode(t.toString()));else if(function(e){return"[object Array]"==Object.prototype.toString.call(e)}(t))u(t,i);else if(l(t))n.appendChild(c=t);else if(t instanceof a)n.appendChild(c=t);else if("object"==typeof t)for(var f in t)if("function"==typeof t[f])/^on\w+/.test(f)?function(t,r){n.addEventListener?(n.addEventListener(t.substring(2),r[t],!1),e.push(function(){n.removeEventListener(t.substring(2),r[t],!1)})):(n.attachEvent(t,r[t]),e.push(function(){n.detachEvent(t,r[t])}))}(f,t):(n[f]=t[f](),e.push(t[f](function(e){n[f]=e})));else if("style"===f)if("string"==typeof t[f])n.style.cssText=t[f];else for(var d in t[f])!function(r,o){if("function"==typeof o)n.style.setProperty(r,o()),e.push(o(function(e){n.style.setProperty(r,e)}));else var i=t[f][r].match(/(.*)\W+!important\W*$/);i?n.style.setProperty(r,i[1],"important"):n.style.setProperty(r,t[f][r])}(d,t[f][d]);else if("attrs"===f)for(var p in t[f])n.setAttribute(p,t[f][p]);else"data-"===f.substr(0,5)?n.setAttribute(f,t[f]):n[f]=t[f];else if("function"==typeof t){p=t();n.appendChild(c=l(p)?p:s.createTextNode(p)),e.push(t(function(e){l(e)&&c.parentElement?(c.parentElement.replaceChild(e,c),c=e):c.textContent=e}))}return c}for(;t.length;)i(t.shift());return n}return t.cleanup=function(){for(var t=0;t<e.length;t++)e[t]();e.length=0},t}function l(e){return e&&e.nodeName&&e.nodeType}function u(e,t){if(e.forEach)return e.forEach(t);for(var n=0;n<e.length;n++)t(e[n],n)}(e.exports=c()).context=c},function(e,t){
/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */
e.exports=function(e){var t=String.prototype.split,n=/()??/.exec("")[1]===e;return function(r,o,i){if("[object RegExp]"!==Object.prototype.toString.call(o))return t.call(r,o,i);var s,a,c,l,u=[],f=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.extended?"x":"")+(o.sticky?"y":""),d=0;o=new RegExp(o.source,f+"g");for(r+="",n||(s=new RegExp("^"+o.source+"$(?!\\s)",f)),i=i===e?-1>>>0:i>>>0;(a=o.exec(r))&&!((c=a.index+a[0].length)>d&&(u.push(r.slice(d,a.index)),!n&&a.length>1&&a[0].replace(s,function(){for(var t=1;t<arguments.length-2;t++)arguments[t]===e&&(a[t]=e)}),a.length>1&&a.index<r.length&&Array.prototype.push.apply(u,a.slice(1)),l=a[0].length,d=c,u.length>=i));)o.lastIndex===a.index&&o.lastIndex++;return d===r.length?!l&&o.test("")||u.push(""):u.push(r.slice(d)),u.length>i?u.slice(0,i):u}}()},function(e,t,n){var r=n(5);function o(e){return!!e}e.exports=function(e){var t=e.classList;if(t)return t;var n={add:i,remove:s,contains:a,toggle:function(e){return a(e)?(s(e),!1):(i(e),!0)},toString:function(){return e.className},length:0,item:function(e){return c()[e]||null}};return n;function i(e){var t=c();r(t,e)>-1||(t.push(e),l(t))}function s(e){var t=c(),n=r(t,e);-1!==n&&(t.splice(n,1),l(t))}function a(e){return r(c(),e)>-1}function c(){var t=e.className;return function(e,t){for(var n=[],r=0;r<e.length;r++)t(e[r])&&n.push(e[r]);return n}(t.split(" "),o)}function l(t){var r=t.length;e.className=t.join(" "),n.length=r;for(var o=0;o<t.length;o++)n[o]=t[o];delete t[r]}}},function(e,t){var n=[].indexOf;e.exports=function(e,t){if(n)return e.indexOf(t);for(var r=0;r<e.length;++r)if(e[r]===t)return r;return-1}},function(e,t){},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},,function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},,function(e,t,n){var r=n(15);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},,function(e,t,n){var r=n(18);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},,function(e,t,n){var r=n(21);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},,function(e,t,n){var r=n(24);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},,function(e,t,n){var r=n(27);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},,function(e,t,n){var r=n(30);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},,function(e,t,n){var r=n(33);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},,function(e,t,n){var r=n(36);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);class r{constructor(e){this.url=e.url}load(){return window.fetch(this.url).then(e=>e.json()).then(e=>JSON.parse(e.files["my-profile.json"].content))}}n(7);class o{static render(e){return JSX("header",{className:"header w3-container w3-padding w3-teal w3-margin-bottom"},JSX("div",{className:"user-name"},e.name," ",e.surname),JSX("div",{className:"position"},"JavaScript developer"))}}n(11);class i{static render(e){return JSX("div",{className:`cv-section ${e.cls} w3-card w3-white w3-container w3-margin-bottom`},JSX("h2",{className:"cv-section-title w3-text-teal"},e.title),JSX("div",{className:"cv-section-content w3-margin-bottom"},e.content))}}n(14);class s{constructor(e){this.config=e}render(){return this.config.map(e=>this.renderItem(e))}renderItem(e){return JSX("div",{className:"list-item w3-row w3-margin-bottom"},JSX("div",{className:"item-key w3-text-teal w3-quarter"},e.key),JSX("div",{className:"item-value w3-threequarter"},e.value))}}n(17);class a extends s{renderItem(e){return JSX("div",{className:"list-item w3-row w3-margin-bottom"},JSX("div",{className:"item-key w3-text-teal w3-quarter"},e.key),JSX("div",{className:"item-value w3-threequarter"},function(e){return c.test(e)?JSX("a",{href:e.startsWith("http")?e:`http://${e}`},e):e}(e.value)))}}const c=RegExp(/^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9:%_\+.~#?&//=]*)/);class l extends s{}n(20);class u extends s{renderItem(e){return JSX("div",{className:"list-item w3-row w3-margin-bottom"},JSX("div",{className:"item-key w3-text-teal w3-quarter"},e.date),JSX("div",{className:"item-value w3-threequarter"},JSX("div",{className:"title"},e.title),JSX("div",{className:"company-name"},e.company),JSX("div",{className:"description"},e.description)))}}n(23);class f extends s{renderItem(e){return JSX("div",{className:"list-item w3-row w3-margin-bottom"},JSX("div",{className:"item-key w3-text-teal w3-quarter"},e.date),JSX("div",{className:"item-value w3-threequarter"},JSX("div",{className:"title"},JSX("a",{href:e.link},e.title)),JSX("div",{className:"company-name"},e.company)))}}n(26);class d extends s{}n(29);class p extends s{renderItem(e){return JSX("div",{className:"list-item w3-row w3-margin-bottom"},JSX("div",{className:"item-key w3-text-teal w3-quarter"},e.name),JSX("div",{className:"item-value w3-threequarter"},e.links.map(this.renderLink),JSX("div",{className:"description w3-margin-top"},e.description)))}renderLink(e){return JSX("div",{className:"link"},JSX("span",null,e.name,": ",JSX("a",{href:e.link},e.link)))}}n(32);var v=n(1),m=n.n(v);class h{static render(){return JSX("footer",{className:"w3-container w3-teal w3-padding w3-center footer"},JSX("div",{className:"author"},"Developed by O.Popov, 2018"),JSX("div",{className:"sources"},JSX("img",{src:m.a,className:"github-icon",alt:"github-icon"})," ",JSX("a",{href:"https://github.com/AlexeyPopovUA/about-myself",className:"github-link"},"GitHub sources")))}}n(35);class y{constructor(){}render(e){return JSX("div",{className:"main"},o.render(e.user),JSX("div",{className:"w3-content"},JSX("div",{className:"w3-container sections"},i.render({title:"Contact information",cls:"contacts",content:new a(Object.keys(e.contacts).map(t=>({key:t,value:e.contacts[t]}))).render()}),i.render({title:"Skills",cls:"skills",content:new l(e.skills.map(e=>({key:e.name,value:e.description}))).render()}),i.render({title:"Work history",cls:"history",content:new u(e.experience).render()}),i.render({title:"Education",cls:"history",content:new u(e.education).render()}),i.render({title:"Certifications",cls:"certificates",content:new f(e.certificates).render()}),i.render({title:"Own projects",cls:"own-projects",content:new p(e.ownProjects).render()}),i.render({title:"Additional information",cls:"more",content:new d(e.additionalInfo.map(e=>({key:e.name,value:e.description}))).render()}))),h.render())}}window.JSX=n(2),window.addEventListener("load",()=>(new class{constructor(){this.store=new r({url:"https://api.github.com/gists/cc3095560d8b1335675c8f38b17ec06b"}),this.view=new y}run(){this.store.load().then(e=>document.body.appendChild(this.view.render(e))).catch(e=>console.error(e))}}).run())}]);
//# sourceMappingURL=index.js.map