"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.connectionString = void 0;

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _logger = _interopRequireDefault(require("../dbLogger/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config(); // this should be made dynamic based on the environment
// development, test, production


var connectionString = process.env.DATABASE_DEV_URL;
exports.connectionString = connectionString;

_logger["default"].info("NODE_environment: ".concat(process.env.NODE_ENV));

var db = new _pg.Pool({
  connectionString: connectionString
}); // this was the missing piece.
// the database connection was not being established
// hence, the 'on connect' event below wasn't triggered

db.connect();
db.on('connect', function () {
  _logger["default"].info('connected to the database');

  console.log('connected to the database');
});
db.on('error', function () {
  _logger["default"].info('failed to connect to the database');

  console.log('failed to connect to the database');
});
var _default = db; // const { Pool } = require('pg')
// require('dotenv').config();
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL_URL,
//   ssl: process.env.NODE_ENV === "production" ? true: false
// });
// pool.on('connect', () => {
//   console.log('connected');
// });
// pool.on('error', () => {
//   console.log('failed to connect');
// });
// module.exports = {
//   query: (text, params) => pool.query(text, params),
// }

exports["default"] = _default;