"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _users = _interopRequireDefault(require("../models/users"));

var _products = _interopRequireDefault(require("../models/products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config(); // import img from '../../uploads/image-1604038157664.jpg'
// let retrievedImage = (product.image.split(''))
// let filteredImage = retrievedImage.splice(0,8,'http://localhost:5001/uploads/')
// let image = retrievedImage.join('')


var User = new _users["default"]();
var Product = new _products["default"]();

var seedDatabase = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var users, seedUsers, products, seedProducts;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            users = [{
              first_name: 'gabby',
              last_name: 'gabby',
              email: 'gabby@gmail.com',
              password: 'gabbypassword'
            }, {
              first_name: 'tarik',
              last_name: 'tarik',
              email: 'tarik@gmail.com',
              password: 'tarikpassword'
            }, {
              first_name: 'jizael',
              last_name: 'jizael',
              email: 'jizael@gmail.com',
              password: 'jizaelpassword'
            }];
            seedUsers = users.map( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userData) {
                var newUser;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return User.create(userData);

                      case 2:
                        newUser = _context.sent;
                        return _context.abrupt("return", newUser);

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());
            console.log('seeded users', seedUsers); //   const insertedUsers = await Promise.all(seedUsers);

            products = [{
              //   createdBy: insertedUsers[0].id,
              product_name: 'pizza',
              price: 20,
              quantity_in_stock: 19,
              description: 'pizza description',
              image: 'image'
            }, {
              //   createdBy: insertedUsers[0].id,
              product_name: 'pizza',
              price: 20,
              quantity_in_stock: 19,
              description: 'pizza description',
              image: 'image'
            }, {
              //   createdBy: insertedUsers[0].id,
              product_name: 'pizza',
              price: 20,
              quantity_in_stock: 19,
              description: 'pizza description',
              image: 'image'
            }];
            seedProducts = products.map( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(userData) {
                var newProduct;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return Product.create(userData);

                      case 2:
                        newProduct = _context2.sent;
                        return _context2.abrupt("return", newProduct);

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x2) {
                return _ref3.apply(this, arguments);
              };
            }());
            console.log('seeded users', seedProducts); //   const insertedUsers = await Promise.all(seedUsers);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function seedDatabase() {
    return _ref.apply(this, arguments);
  };
}();

var _default = seedDatabase;
exports["default"] = _default;