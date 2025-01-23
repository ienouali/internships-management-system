const express = require('express');
const userController = require('./../controllers/userController'); 

const router = express.Router();

/**
 *  ROUTER
 */
router.route('/login').post(userController.login);

router.route('/').get(userController.getAllUsers);

router.route('/').post(userController.addUser);

router.route('/:id').patch(userController.updateUser);

router.route('/:id').delete(userController.deleteUser);

module.exports = router;