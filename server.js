import Html from './public/index.html';
import js from './src/index.js';

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(process.env.PORT || 8080, function () {
    console.log('Servidor lindão rodando!');
});

Html();
js();
