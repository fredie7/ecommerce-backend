"use strict";

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("../controllers/auth"));

var _signupValidator = _interopRequireDefault(require("../middlewares/validators/signupValidator"));

var _signinValidator = _interopRequireDefault(require("../middlewares/validators/signinValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var signupValidator = _signupValidator["default"].signupValidator;
var signinValidator = _signinValidator["default"].signinValidator;
var signup = _auth["default"].signup,
    signin = _auth["default"].signin;
router.post('/signup', signupValidator, signup);
router.post('/signin', signinValidator, signin);
module.exports = router;