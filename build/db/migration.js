"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _pg = require("pg");

var _index = _interopRequireWildcard(require("./index"));

var _logger = _interopRequireDefault(require("../dbLogger/logger"));

var _seed = _interopRequireDefault(require("./seed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import seedData from '../db/seed';
// import seedDatabase from '../db/seed';
var queryText = "\nCREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";\nDROP TABLE IF EXISTS users;\nDROP TABLE IF EXISTS products;\n\nCREATE TABLE IF NOT EXISTS users (\n  \"id\" UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),\n  \"first_name\" VARCHAR(100) NOT NULL,\n  \"last_name\" VARCHAR(100) NOT NULL,\n  \"email\" VARCHAR(100) UNIQUE NOT NULL,\n  \"password\" VARCHAR(100) NOT NULL\n);\n\nCREATE TABLE IF NOT EXISTS products (\n  \"id\" UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),\n  \"product_name\" VARCHAR(100) NOT NULL,\n  \"price\" INT NOT NULL,\n  \"quantity_in_stock\" INT NOT NULL,\n  \"description\" TEXT NOT NULL,\n  \"image\" VARCHAR(300) UNIQUE NOT NULL,\n);\n";
var dBase = new _pg.Pool({
  connectionString: _index.connectionString
});
dBase.on('connect', function () {
  _logger["default"].info('CONNECTED TO DATABASE'); // seedDatabase();

});

_index["default"].query(queryText).then(function (result) {
  _logger["default"].info(result);

  _seed["default"].then(function () {
    process.exit(0);
  });
})["catch"](function (error) {
  _logger["default"].info(error);

  process.exit(1);
});