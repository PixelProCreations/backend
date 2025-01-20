const express = require('express');
const { createDetails, details, getDetailsById, updateStock, deleteBook } = require('../controller/controller');
const router = express.Router();

router.route('/').get(details).post(createDetails); 
router.route('/:id').get(getDetailsById).put(updateStock).patch(updateStock).delete(deleteBook);

module.exports = router;
