"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../db"));

var _hash = _interopRequireDefault(require("../services/hash"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var jwtExpiryTime = 3600;
var authControllers = {
  signup: function () {
    var _signup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var query, userExists, newUser;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _db["default"].query('SELECT * FROM  users WHERE email = $1', [req.body.email]);

            case 3:
              query = _context.sent;
              userExists = query.rows[0];

              if (!userExists) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", res.status(401).json({
                error: 'user already exists'
              }));

            case 7:
              _context.next = 9;
              return _db["default"].query('INSERT INTO users(first_name, last_name, email, password) VALUES ($1, $2, $3, $4) returning*', [req.body.first_name, req.body.last_name, req.body.email, (0, _hash["default"])(req.body.password)]);

            case 9:
              newUser = _context.sent;
              return _context.abrupt("return", res.status(201).json({
                data: newUser.rows[0]
              }));

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(500).json({
                error: 'internal server error',
                stack: _context.t0
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    function signup(_x, _x2) {
      return _signup.apply(this, arguments);
    }

    return signup;
  }(),
  signin: function () {
    var _signin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var query, password, existingUser, isCorrectPassword, id, first_name, token;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _db["default"].query('SELECT * FROM users WHERE email = $1', [req.body.email]);

            case 3:
              query = _context2.sent;
              password = req.body.password;
              existingUser = query.rows[0];
              isCorrectPassword = existingUser && _bcryptjs["default"].compareSync(password, existingUser.password, function (err, res) {});

              if (isCorrectPassword) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return", res.status(401).json({
                message: 'password does not match'
              }));

            case 9:
              id = existingUser.id, first_name = existingUser.first_name;
              token = _jsonwebtoken["default"].sign({
                id: id
              }, process.env.JWT_SECRET, {
                expiresIn: jwtExpiryTime
              });
              return _context2.abrupt("return", res.status(200).json({
                id: id,
                first_name: first_name,
                token: token
              }));

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", res.status(500).json({
                error: 'internal server error',
                stack: _context2.t0
              }));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }));

    function signin(_x3, _x4) {
      return _signin.apply(this, arguments);
    }

    return signin;
  }()
};
var _default = authControllers;
exports["default"] = _default;