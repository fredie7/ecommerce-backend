"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../db"));

var _logger = _interopRequireDefault(require("../dbLogger/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Products = /*#__PURE__*/function () {
  function Products() {
    _classCallCheck(this, Products);
  }

  _createClass(Products, [{
    key: "parcel",
    value: function () {
      var _parcel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var createProduct, values, _yield$db$query, rows;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                createProduct = "INSERT INTO products \"product_name\",\"price\",\"quantity_in_stock\",\"description\"\n    ,\"image\" returning *";
                values = [data.product_name, data.price, data.quantity_in_stock, data.description, data.image];
                _context.prev = 2;
                _context.next = 5;
                return _db["default"].query(createProduct, values);

              case 5:
                _yield$db$query = _context.sent;
                rows = _yield$db$query.rows;
                return _context.abrupt("return", rows[0]);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);

                _logger["default"].error(_context.t0);

                return _context.abrupt("return", _context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }));

      function parcel(_x) {
        return _parcel.apply(this, arguments);
      }

      return parcel;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var text, _yield$db$query2, rows;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                text = "SELECT * FROM products WHERE id = $1";
                _context2.prev = 1;
                _context2.next = 4;
                return _db["default"].query(text, [id]);

              case 4:
                _yield$db$query2 = _context2.sent;
                rows = _yield$db$query2.rows;
                return _context2.abrupt("return", rows[0]);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                return _context2.abrupt("return", _context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 9]]);
      }));

      function getById(_x2) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }, {
    key: "getByField",
    value: function () {
      var _getByField = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(field, value) {
        var text, _yield$db$query3, rows;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                text = "SELECT * FROM products WHERE '".concat(field, "' = $1");
                _context3.prev = 1;
                _context3.next = 4;
                return _db["default"].query(text, [value]);

              case 4:
                _yield$db$query3 = _context3.sent;
                rows = _yield$db$query3.rows;
                return _context3.abrupt("return", rows[0]);

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](1);
                return _context3.abrupt("return", _context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 9]]);
      }));

      function getByField(_x3, _x4) {
        return _getByField.apply(this, arguments);
      }

      return getByField;
    }()
  }]);

  return Products;
}();

var _default = Products;
exports["default"] = _default;