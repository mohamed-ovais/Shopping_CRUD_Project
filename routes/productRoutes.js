const express = require('express');
const Product = require('../models/productModel');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const router = express.Router();


router.get('/products', getProducts)

router.get('/product/:id',getProduct)

router.post('/newproduct',createProduct)
//Update Product
router.put('/product/:id',updateProduct)

//Delete Product
router.delete('/product/:id', deleteProduct)

module.exports = router;