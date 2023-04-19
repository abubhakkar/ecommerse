const express = require('express');
const router = express.Router();
const {  getAllProduct, createNewProduct,deleteProduct,updateProductQuality,} = require('../controller/prodeuctController')

router.route('/').get(getAllProduct)
router.route('/create').post(createNewProduct)
router.route('/:id/update_quanity').post(updateProductQuality)
router.route('/:id').delete(deleteProduct)



module.exports = router