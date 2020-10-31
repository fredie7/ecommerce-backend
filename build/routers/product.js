"use strict";

var _express = _interopRequireDefault(require("express"));

var _product = _interopRequireDefault(require("../controllers/product"));

var _storage = require("../storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var createProduct = _product["default"].createProduct,
    getAllProducts = _product["default"].getAllProducts,
    getOneProduct = _product["default"].getOneProduct;
router.post('/createProduct', _storage.upload.single('image'), createProduct); // router.post('/createProduct', createProduct)

router.get('/getAllProducts', getAllProducts);
router.get('/getOneProduct/:id', getOneProduct);
module.exports = router;