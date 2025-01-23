const express = require('express');

const internshipController = require('../controllers/internshipController');
const router = express.Router();

/** ROUTER */
router.route('/demand/:id').get(internshipController.getDemand);

router.route('/demand').post(internshipController.includeFile,internshipController.addDemand);

router.route('/refused').get(internshipController.demandsRefusedList);

router.route('/completed').get(internshipController.completedInternshipsList);

router.route('/details/:id').get(internshipController.detailsInternship);

router.route('/closed').get(internshipController.closedInternshipsList);

router.route('/accepted').get(internshipController.internshipsList);

router.route('/demands').get(internshipController.demandsList);

router.route('/accept/:id').patch(internshipController.acceptOrUpdateDemand);

router.route('/delete/:id').delete(internshipController.deleteInternship);

router.route('/close/:id').patch(internshipController.closeInternship);

router.route('/refuse/:id').patch(internshipController.refuseDemand);

router.route('/attestation').post(internshipController.createAttestation);

router.route('/attestation').get(internshipController.sendAttestation);


module.exports = router;
