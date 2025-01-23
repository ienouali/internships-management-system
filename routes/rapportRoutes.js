const express = require('express');
const rapportController = require('./../controllers/rapportController');

const router = express.Router();


/**
 *  ROUTER 
 */
router.route('/').get(rapportController.liste_rapports);

router.route('/').post(rapportController.ajouter_rapport);

router.route('/:id').get(rapportController.recuperer_rapport);

router.route('/:id').patch(rapportController.modifier_rapport);

router.route('/:id').delete(rapportController.supprimer_rapport);



module.exports = router;