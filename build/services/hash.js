"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var hashPassword = function hashPassword(password) {
  var salt = _bcryptjs["default"].genSaltSync(10);

  return _bcryptjs["default"].hashSync(password, salt);
};

var _default = hashPassword;
exports["default"] = _default;