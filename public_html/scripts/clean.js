const sh = require('shelljs');
const upath = require('upath');

const destPath = upath.resolve(upath.dirname(__filename), '../public_html');

sh.rm('-rf', `${destPath}/*`)
