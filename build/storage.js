"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload = void 0;

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var path = require('path');

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function filename(req, file, cb) {
    // const extension = file.mimetype.substr(file.mimetype.length - 3);
    // cb(null, file.fieldname + '-' + Date.now() + `.${extension}`)
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

var upload = (0, _multer["default"])({
  storage: storage
});
exports.upload = upload;