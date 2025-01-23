const express = require('express');
const supervisorController = require('../controllers/supervisorController');

const router = express.Router();

/** ROUTER  */
router.route('/').get(supervisorController.supervisorsList);

router.route('/').post(supervisorController.addSupervisor);

router.route('/:id').get(supervisorController.getSupervisor);

router.route('/:id').patch(supervisorController.updateSupervisor);

router.route('/delete/:id').delete(supervisorController.deleteSupervisor);

module.exports = router;