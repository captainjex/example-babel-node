"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = void 0;

require('dotenv').config();

var PORT = process.env.PORT || 3000;
exports.PORT = PORT;