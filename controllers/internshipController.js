const Internship = require('../models/internshipModel');
const traineeController = require('./traineeController');
const supervisorController = require('./supervisorController');
const path = require('path');
const Trainee = require('../models/traineeModel');
const User = require('../models/userModel');
const multer = require('multer');
const pdf = require('html-pdf');
const pdfTemplate = require('../public/files/attestation/index');
const i18n = require('i18n-nodejs');
const tools = require('../config/tools');
let translate;


/** create pdf attestation */
exports.createAttestation = async (req, res) => {
    const {nom,prenom,date_debut} = req.body;
    const startDate = date_debut.split('T')[0];
    const dataInternship = {nom,prenom,startDate};
       await pdf.create(pdfTemplate(dataInternship),{})
           .toFile('public/files/attestation/attestation.pdf',err => {
           if(err) {
               return Promise.reject();
           }
           return Promise.resolve()
               .then(() => {
                   res.status(201).json({status: translate.__('msgStatus')});
           });
       });
};

/** send pdf attestation */
exports.sendAttestation = async (req, res) => {
    let options = {
        root: path.join('public/files/attestation'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    await res.sendFile(`attestation.pdf`,options,(err => {}));

};

const multerStorage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'public/files/cv');
    },
    filename: (req, file, callBack) => {
        let ext = file.mimetype.split('/')[1];
        ext = ext ==='pdf' ? '.pdf' : ext.includes('.document') ? '.docx' : '.pdf';
        callBack(null, `CV-${req.body.nom}-${req.body.prenom}-${req.body.date_naissance}${ext}`.trim().toUpperCase());
    }
});

const multerFilter = (req, file, callBack) => {
    if (file.mimetype.startsWith('image')) {
        callBack(console.log(translate.__('msgFileNotAllowed')), false);
    } else {
        callBack(null, true);
    }
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

/** Upload file */
exports.includeFile = upload.single('cv');

/** Add demand */
exports.addDemand = async (req, res) => {
    User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
    try {
        let {
            civilite, nom, prenom, date_naissance, email, tel,
            adresse, cin, etat_civil, formation, linkedin, cv,
            date_debut_stage, date_fin_stage, type_de_stage
        } = req.body;
        let ext = req.file.mimetype.split('/')[1];
        ext = ext ==='pdf' ? '.pdf' : ext.includes('.document') ? '.docx' : '.pdf';
        cv = `CV-${req.body.nom}-${req.body.prenom}-${req.body.date_naissance}${ext}`.trim().toUpperCase();
        const demandInfos = {
            date_debut_stage, date_fin_stage, type_de_stage
        };
        const traineeInfos = {
            civilite, nom, prenom, date_naissance, email, tel, adresse, cin, etat_civil, formation, linkedin, cv
        };
        const demand = req.body;
        await traineeController.addTraineeAndGetID(traineeInfos)
            .then(async response => {
                if (response.exist === 1) {
                    const {id} = response;
                    const check = await Internship.findOne(demandInfos);
                    if (check !== null) {
                        res.status(400).json({
                            status: translate.__('failStatus'),
                            message: translate.__('msgDemandAlreadyExist')
                        });
                    } else {
                        demand.stagiaire = {_id: id};
                        await Internship.create(demand);
                        res.status(201).json({
                            status: translate.__('successStatus'),
                            message: translate.__('msgDemandAdded')
                        });
                    }
                } else {
                    demand.stagiaire = {_id: response};
                    await Internship.create(demand);
                    res.status(201).json({
                        status:  translate.__('successStatus'),
                        message: translate.__('msgDemandAdded')
                    });
                }
            });
    } catch (err) {
        res.status(404).json({
            err,
            status:  translate.__('failStatus'),
            message: translate.__('msgErrorDataSent')
        })
    }
};


/**  Demands list  */
exports.demandsList = async (req, res) => {
    User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
    try {
        const demandsList = await Internship.find({statut: 'En attente de décision'});
        if(demandsList.length === 0) {
            res.status(404).json({
                status: translate.__('failStatus'),
                message: translate.__('msgListDemandsEmpty')
            });
        }
        let demandTrainee;
        let newDemandsList = [];
            await demandsList.map((demand, index) => {
                return traineeController.demandTrainee(demand.stagiaire._id)
                    .then(trainee => {
                        demandTrainee = {...trainee, demand};
                        newDemandsList.push(demandTrainee);
                        if (index === demandsList.length - 1) {
                            res.status(200).json({
                                status: translate.__('successStatus'),
                                list: newDemandsList,
                            });
                        }
                    });
            });
    } catch (err) {
        res.status(404).json({
            status: translate.__('failStatus'),
            message: translate.__('demandsListNotFound')
        });
    }
};

/** Get demand */
exports.getDemand = async (req, res) => {
    try {
        const id = req.params.id;
        const demand = await Internship.findById(id);
        const trainee = await traineeController.getTrainee(demand.stagiaire._id);
        res.status(200).json({
            status: translate.__('successStatus'),
            demand,
            trainee
        });
    } catch (err) {
        res.status(404).json({
            status:  translate.__('failStatus'),
            message: translate.__('demandNotFound')
        });
    }
};


/** Accept Demand  */
exports.acceptOrUpdateDemand = async (req, res) => {
    User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
    try {
        const {
            stagiaire, encadrant, supervisor, civilite, nom, prenom, date_naissance,
            email, tel, adresse, cin, etat_civil, formation,
            linkedin, cv, sujet, commentaire, statut
        } = req.body;
        const traineeInfos = {
            stagiaire, civilite, nom, prenom, date_naissance,
            email, tel, adresse, cin, etat_civil, formation, linkedin, cv
        };
        await traineeController.updateInfosTrainee(stagiaire, traineeInfos);
        let internship = req.body;
        internship.statut = internship.statut === 'updated' ? 'En attente de décision' : 'accepted';

        internship.encadrant = {_id: supervisor};
        const updatedData = await Internship.findByIdAndUpdate(internship._id, internship, {
            new: true,
            runValidators: true
        });
        if (updatedData !== null) {
            res.status(200).json({
                status: translate.__('successStatus'),
                message: translate.__('dataSaved')
            });
        }
    } catch (err) {
        res.status(400).json({
            status: translate.__('failStatus'),
            message:translate.__('error'),
            error: err
        });
    }
};


/** close internship  */
exports.closeInternship = async (req, res) => {
    User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
    try {
        let id = req.params.id;
        const updatedData = await Internship.updateOne({_id: id}, {statut: 'closed'});
        if (updatedData !== null) {
            res.status(200).json({
                status: translate.__('successStatus'),
                message: translate.__('closedSuccessfully'),
            });
        }
    } catch (err) {
        res.status(400).json({
            status: translate.__('failStatus'),
            message:translate.__('error'),
            error: err
        });
    }
};


/** Internship accepted */
exports.internshipsList = async (req, res) => {
    User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
    try {
        const internshipList = await Internship.find({statut: 'accepted'});
        if(internshipList.length === 0) {
            res.status(404).json({
                status: translate.__('failStatus'),
                message: translate.__('msgListInternshipsEmpty')
            });
        }
        let infosTrainee;
        let newInternshipList = [];
        await internshipList.map((internship, index) => {
            return traineeController.demandTrainee(internship.stagiaire._id)
                .then(trainee => {
                    infosTrainee = {...trainee, internship};
                    newInternshipList.push(infosTrainee);
                    if (index === internshipList.length - 1) {
                        res.status(200).json({
                            status: translate.__('successStatus'),
                            list: newInternshipList,
                        });
                    }
                });
        });
    } catch (err) {
        res.status(400).json({
            status: translate.__('failStatus'),
            message:translate.__('error'),
            error: err
        });
    }
};

/** Demands refused  */
exports.demandsRefusedList = async (req, res) => {
    User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
    try {
        const refusedList = await Internship.find({statut: 'refused'});
        if(refusedList.length === 0) {
            res.status(404).json({
                status: translate.__('failStatus'),
                message: translate.__('msgListRefusedDemandsEmpty')
            });
        }
        let dataTrainee;
        let newRefusedList = [];
        await refusedList.map((refused, index) => {
            return traineeController.demandTrainee(refused.stagiaire._id)
                .then(trainee => {
                    dataTrainee = {...trainee, refused};
                    newRefusedList.push(dataTrainee);
                    if (index === refusedList.length - 1) {
                        res.status(200).json({
                            status: translate.__('successStatus'),
                            list: newRefusedList,
                        });
                    }
                });
        });
    } catch (err) {
        res.status(400).json({
            status: translate.__('failStatus'),
            message:translate.__('error'),
            error: err
        });
    }
};

/** Completed Internships  */
exports.completedInternshipsList = async (req, res) => {
    User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
    try {
        const now = new Date().toISOString().split('T')[0];
        const completedList = await Internship.find({date_fin_stage: {$lte: new Date(now)}});
        if(completedList.length === 0) {
            res.status(404).json({
                status: translate.__('failStatus'),
                message: translate.__('msgListCompletedEmpty')
            });
        }
        let dataTrainee;
        let newList = [];
        await completedList.map((completed, index) => {
            return traineeController.demandTrainee(completed.stagiaire._id)
                .then(trainee => {
                    dataTrainee = {...trainee, completed};
                    newList.push(dataTrainee);
                    if (index === completedList.length - 1) {
                        res.status(200).json({
                            status: translate.__('successStatus'),
                            list: newList,
                        });
                    }
                });
        });
    } catch (err) {
        res.status(400).json({
            status: translate.__('failStatus'),
            message:translate.__('error'),
            error: err
        });
    }
};

/** Closed Internships  */
exports.closedInternshipsList = async (req, res) => {
    User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
    try {
        const closedList = await Internship.find({statut: 'closed'});
        if(closedList.length === 0) {
            res.status(404).json({
                status: translate.__('failStatus'),
                message: translate.__('msgListClosedEmpty')
            });
        }
        let dataTrainee;
        let newClosedList = [];
        await closedList.map((closed, index) => {
            return traineeController.demandTrainee(closed.stagiaire._id)
                .then(trainee => {
                    dataTrainee = {...trainee, closed};
                    newClosedList.push(dataTrainee);
                    if (index === closedList.length - 1) {
                        res.status(200).json({
                            status: translate.__('successStatus'),
                            list: newClosedList,
                        });
                    }
                });
        });
    } catch (err) {
        res.status(400).json({
            status: translate.__('failStatus'),
            message:translate.__('error'),
            error: err
        });
    }
};

exports.deleteInternship = async (req, res) => {
    User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
    try {
        const id = req.params.id;
        const demand = await Internship.findById(id);
        if(demand.statut === 'En attente de décision') {
              await  Trainee.findByIdAndDelete(demand.stagiaire._id);
              await Internship.findByIdAndDelete(id);
            res.status(200).json({
                status: translate.__('successStatus'),
                message: translate.__('demandDeleted')
            })
        }
        else {
            await Internship.findByIdAndDelete(id);
            res.status(200).json({
                status: translate.__('successStatus'),
                message: translate.__('deletionSuccessfully')
            });
        }
    } catch (err) {
        res.status(404).json({
            status: translate.__('failStatus'),
            message: translate.__('error')
        });
    }
};


exports.refuseDemand = async (req, res) => {
    User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
    try {
        const id = req.params.id;
        const demand = req.body;
        demand.statut = 'refused';
        await Internship.findByIdAndUpdate(id, demand, {new: true, runValidators: true});
        res.status(200).json({
            status:translate.__('successStatus'),
            message: translate.__('demandRefused')
        });
    } catch (err) {
        res.status(404).json({
            status: translate.__('failStatus'),
            message: translate.__('error')
        });
    }
};


exports.getInternshipsTrainee = async (traineeID) => {
    try {
        return await Internship.find({stagiaire: {_id: traineeID.toString()}});
    } catch (err) {
      
    }
};


exports.detailsInternship = async (req, res) => {
    User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
    try {
        const id = req.params.id;
        const internship = await Internship.findById(id);
        const trainee = await traineeController.getTrainee(internship.stagiaire._id);
        const supervisor = await supervisorController.supervisorInfos(internship.encadrant._id);
        const details = {internship, trainee, supervisor};
        res.status(200).json({
            status: translate.__('successStatus'),
            details
        });
    } catch (err) {
        res.status(404).json({
            status: translate.__('failStatus'),
            message: translate.__('error')
        });
    }
};