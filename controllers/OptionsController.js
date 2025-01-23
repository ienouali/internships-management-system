const  Agence = require('../models/agencyModel');
const  Civilite = require('../models/civilityModel');
const  Department = require('../models/departmentModel');
const  FamilySituation = require('../models/familySituationModel');
const  Formation = require('../models/formationModel');
const  TypeIntern = require('../models/typeInternshipModel');


/** options agency  */
exports.getAllAgency = async (req, res) => {
    try {
        const Agency = await Agence.find();
        res.status(200).json({
            status: 'success',
            Agency
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Agency not found , try again please !'
        });
    }
};

/** options Civility  */
exports.getAllCivility = async (req, res) => {
    try {
        const Civility = await Civilite.find();
        res.status(200).json({
            status: 'success',
            Civility
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Civility not found, try again please !'
        });
    }
};


/** options familySituation  */
exports.getFamilySituation = async (req, res) => {
    try {
        const familySituation = await FamilySituation.find();
        res.status(200).json({
            status: 'success',
            familySituation
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'family Situation not found, try again please !'
        });
    }
};

/** options Department  */
exports.getAllDepartment = async (req, res) => {
    try {
        const Departments = await Department.find();
        res.status(200).json({
            status: 'success',
            Departments
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Department not found, try again please !'
        });
    }
};

/** options formations  */
exports.getAllFormations = async (req, res) => {
    try {
        const Formations = await Formation.find();
        res.status(200).json({
            status: 'success',
            Formations
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Formations not found, try again please !'
        });
    }
};

/** options type Internship  */
exports.getAllTypeInternship = async (req, res) => {
    try {
        const TypeInternship = await TypeIntern.find();
        res.status(200).json({
            status: 'success',
            TypeInternship
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Type Internship not found, try again please !'
        });
    }
};



