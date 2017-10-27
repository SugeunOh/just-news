// 이 파일은 `dev/fuse.js`에서 import 하고있으니 .js 파일로 유지돼야 합니다.

const sites = require('./sites').default;

// http://wiki.greasespot.net/Metadata_Block
exports.__esModule = true;
exports.default = `// ==UserScript==
// @name just-news
// @namespace http://0xABCDEF.com/just-news
// @description just news
// @version ${ (new Date).toISOString().substr(0, 10).replace(/-/g, '') }
// @updateURL https://github.com/disjukr/just-news/raw/release/dist/just-news.user.js
// @downloadURL https://github.com/disjukr/just-news/raw/release/dist/just-news.user.js
// @copyright 2014 JongChan Choi
// @grant none
${
    Object.keys(sites).map(
        site => sites[site].map(
            pattern => `// @include ${ pattern }`
        ).join('\n')
    ).join('\n')
}
// ==/UserScript==`;
