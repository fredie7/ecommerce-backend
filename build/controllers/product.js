"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('dotenv').config();

var cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dfr4t7fq3',
  api_key: '774194851589514',
  api_secret: 'PQqWaHT0NB2r0k9KbcU3jI7Vd2s'
});
var productController = {
  createProduct: function () {
    var _createProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      var query;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _db["default"].query("INSERT INTO products (product_name, price, quantity_in_stock, description, image) VALUES($1, $2, $3,$4,$5) returning*", [req.body.product_name, req.body.price, req.body.quantity_in_stock, req.body.description, req.file.path]);

            case 3:
              query = _context.sent;
              console.log(req.file);
              return _context.abrupt("return", res.status(201).json({
                data: query.rows[0]
              }));

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              return _context.abrupt("return", res.status(500).json({
                error: 'internal server error',
                stack: _context.t0
              }));

            case 12:
              next();

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    function createProduct(_x, _x2, _x3) {
      return _createProduct.apply(this, arguments);
    }

    return createProduct;
  }(),
  // createProduct: async (req, res)=> {
  //     console.log('before data:',req.body)
  //         const data = {
  //             product_name: req.body.product_name,
  //             price: req.body.price,
  //             quantity_in_stock: req.body.quantity_in_stock,
  //             description: req.body.description,
  //             image: req.image,
  //         }
  //         console.log('after data:',data)
  //         cloudinary.uploader.upload(data.image)
  //         .then(image=> {console.log('image',image)
  //             const query = db.query(
  //                 "INSERT INTO products (product_name, price, quantity_in_stock, description, image) VALUES($1, $2, $3, $4, $5) returning*",
  //                 [data.product_name, data.price, data.quantity_in_stock, data.description, image]
  //             )
  //             console.log(query)
  //             return res.status(201).json({ data: query.rows[0] });
  //         }).catch(error=> {
  //             console.log(error)
  //         })
  // },
  getAllProducts: function () {
    var _getAllProducts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var query;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _db["default"].query("SELECT * FROM products");

            case 3:
              query = _context2.sent;
              return _context2.abrupt("return", res.status(200).json({
                data: query.rows
              }));

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", res.status(500).json({
                error: 'internal server error',
                stack: _context2.t0
              }));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    function getAllProducts(_x4, _x5) {
      return _getAllProducts.apply(this, arguments);
    }

    return getAllProducts;
  }(),
  getOneProduct: function () {
    var _getOneProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
      var query;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _db["default"].query("SELECT * FROM products where id = $1", [req.params.id]);

            case 3:
              query = _context3.sent;
              return _context3.abrupt("return", res.status(200).json({
                data: query.rows[0]
              }));

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", res.status(500).json({
                error: 'internal server error',
                stack: _context3.t0
              }));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));

    function getOneProduct(_x6, _x7) {
      return _getOneProduct.apply(this, arguments);
    }

    return getOneProduct;
  }()
};
var _default = productController;
exports["default"] = _default;