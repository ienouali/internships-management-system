const express = require('express');
const traineeController = require('../controllers/traineeController');

const router = express.Router();

/** ROUTER  */

router.route('/').get(traineeController.traineeList);

 router.route('/:id').get(traineeController.getTraineeInfos);

 router.route('/:id').patch(traineeController.updateTrainee);

 router.route('/:id').delete(traineeController.deleteTrainee);

router.route('/details/:id').get(traineeController.detailsTrainee);

router.route('/cv/:data').get(traineeController.getCV);

module.exports = router;