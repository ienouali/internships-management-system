const express = require('express');
const optionsController = require('../controllers/OptionsController');

const router = express.Router();

/** ROUTER  */
router.route('/agency').get(optionsController.getAllAgency);

router.route('/civility').get(optionsController.getAllCivility);

router.route('/department').get(optionsController.getAllDepartment);

router.route('/formations').get(optionsController.getAllFormations);

router.route('/typeInternships').get(optionsController.getAllTypeInternship);

router.route('/familySituation').get(optionsController.getFamilySituation);

module.exports = router;