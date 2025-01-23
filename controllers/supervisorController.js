const Supervisor = require('../models/supervisorModel');
const User  = require('../models/userModel');
const tools = require('../config/tools');
const i18n = require('i18n-nodejs');
let translate;

/** Add supervisor */
exports.addSupervisor = async (req, res) => {
    User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
    try {
       const supervisor = req.body;
       const checkIfExist = await Supervisor.find(supervisor);
       if(checkIfExist.length > 0) {
           res.status(400).json({
               status:  translate.__('failStatus'),
               message: translate.__('msgSupervisorExist')
           });
       }
       else {
           await Supervisor.create(supervisor);
           res.status(201).json({
               status: translate.__('successStatus'),
               message: translate.__('msgSupervisorAdded')
           });
       }
    }
    catch (err) {
        res.status(400).json({
            status: translate.__('failStatus'),
            message:translate.__('error'),
        })
    }
};
exports.supervisorTrainee = async (ID) => {
    const supervisor = await Supervisor.find(ID);
    const {firstname, lastname} = supervisor;
    return {firstname,lastname};
};


/** Update supervisor */
exports.updateSupervisor = async (req, res) => {
    User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
    try {
        const id = req.params.id;
        const supervisorData = req.body;
        await Supervisor.findByIdAndUpdate(
            id,
            supervisorData,
            { new: true, runValidators: true }
        );
        res.status(200).json({
            status: translate.__('successStatus'),
            message: translate.__('dataSaved')
        });
    }
    catch (err) {
        res.status(404).json({
            status: translate.__('failStatus'),
            message:translate.__('error')
        });
    }
};

/** Get supervisor */
exports.getSupervisor = async (req, res) => {
    try {
        const id = req.params.id;
        const supervisor = await Supervisor.findById(id);
        res.status(200).json({
            status: translate.__('successStatus'),
            supervisor
        });
    }
    catch (err) {
        res.status(404).json({
            status: translate.__('failStatus'),
            message: translate.__('msgSupervisorNotFound')
        });
    }
};

/** Delete supervisor */
exports.deleteSupervisor = async (req, res) => {
    User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
    try {
        const id = req.params.id;
        await Supervisor.findByIdAndDelete(id);
        res.status(200).json({
            status: translate.__('successStatus'),
            message: translate.__('deletionSuccessfully')
        });
    }
    catch (err) {
        res.status(404).json({
            status: translate.__('failStatus'),
            message: translate.__('msgSupervisorNotFound')
        });
    }
};


/** Get ID supervisor */
exports.getSupervisorID = async (supervisor) => {
    try {
        const { nom_encadrant, prenom_encadrant } = supervisor;
        const data = await Supervisor.findOne({ nom_encadrant, prenom_encadrant });
        return data._id;
    }
    catch (err) {
        return err;
    }
};

/** Supervisor list */
exports.supervisorsList = async (req, res) => {
    User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
    try {
        const supervisorsList = await Supervisor.find();
        if(supervisorsList.length === 0) {
            res.status(404).json({
                status: translate.__('failStatus'),
                message: translate.__('msgListSupervisorsEmpty')
            });
        }
        res.status(200).json({
            status: translate.__('successStatus'),
            length: supervisorsList.length,
            list: supervisorsList
        })
    }
    catch (err) {
        res.status(404).json({
            status: translate.__('failStatus'),
            message: translate.__('error')
        });
    }
};


/** Get supervisor  */
exports.supervisorInfos = async ( ID ) => {
    try {
        if (ID !== null) {
            return await Supervisor.findById(ID);
        }
    } catch (err) {
        
    }
};