"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var signupValidator = {
  signupValidator: function signupValidator(req, res, next) {
    req.check('email', 'fill in email field').notEmpty();
    req.check('email').isLength({
      min: 4,
      max: 150
    }).withMessage('email must contain between 4 and 150 characters');
    req.check('email').matches(/.+@.+/).withMessage('email must contain an @ symbol');
    req.check('password').isLength({
      min: 6
    }).withMessage('password must contain at least 6 characters');
    req.check('password').matches(/\d/).withMessage('password must contain a digit character');
    req.check('first_name', 'fill in first name field').notEmpty();
    req.check('last_name', 'fill in last name field').notEmpty();
    var errors = req.validationErrors();

    if (errors) {
      var firstError = errors.map(function (err) {
        return err.msg;
      })[0];
      return res.status(422).json({
        error: firstError
      });
    }

    next();
  }
};
var _default = signupValidator;
exports["default"] = _default;