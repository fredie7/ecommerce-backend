"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var signinValidator = {
  signinValidator: function signinValidator(req, res, next) {
    req.check('email', 'fill in email field').notEmpty();
    req.check('email').isLength({
      min: 4,
      max: 150
    }).withMessage('email must contain between 4 and 150 characters');
    req.check('email').matches(/.+@.+/).withMessage('email must contain an @ symbol');
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
var _default = signinValidator;
exports["default"] = _default;