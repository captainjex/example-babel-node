"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _http = _interopRequireDefault(require("http"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = function server() {
  return _http["default"].createServer(function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('Hello World\n');
  }).listen(_config.PORT, '127.0.0.1');
};

console.log("Server running at http://127.0.0.1:".concat(_config.PORT));
var _default = server;
exports["default"] = _default;