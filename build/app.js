"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _expressValidator = _interopRequireDefault(require("express-validator"));

var _morgan = _interopRequireDefault(require("morgan"));

var _auth = _interopRequireDefault(require("./routers/auth"));

var _product = _interopRequireDefault(require("./routers/product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var app = (0, _express["default"])();
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use("/uploads", _express["default"]["static"]("uploads"));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_bodyParser["default"].json());
app.use((0, _expressValidator["default"])());
app.use((0, _cors["default"])());
app.use('/api/v1/auth', _auth["default"]);
app.use('/api/v1/product', _product["default"]);
var port = process.env.PORT || 5002;
app.listen(port, function () {
  console.log("listening on port ".concat(port));
});