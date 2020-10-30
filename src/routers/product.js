import express from 'express';
import productController from '../controllers/product';
import { upload } from '../storage';
const router = express.Router();

const { createProduct, getAllProducts, getOneProduct } = productController;

router.post('/createProduct',upload.single('image'), createProduct)
// router.post('/createProduct', createProduct)
router.get('/getAllProducts',getAllProducts)
router.get('/getOneProduct/:id',getOneProduct)

module.exports = router;