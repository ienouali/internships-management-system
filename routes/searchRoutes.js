const express = require('express');
const searchController = require('../controllers/searchController');

const router = express.Router();

/** ROUTER  */

router.route('/:value').get(searchController.search);


module.exports = router;