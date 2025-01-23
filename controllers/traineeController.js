const Trainee = require('../models/traineeModel');
const User = require('../models/userModel');
const internshipController = require('./internshipController');
const path = require('path');
const fs = require('fs');
const tools = require('../config/tools');
 const i18n = require('i18n-nodejs');
 let translate;

/** Add trainee and get ID  */
exports.addTraineeAndGetID = async (trainee) => {
    try {
        const {nom, prenom, date_naissance, tel} = trainee;
        const traineeInfos = await Trainee.findOne({nom, prenom, date_naissance, tel});
        if (traineeInfos !== null) {
           let id = traineeInfos._id , exist = 1;
           return {id,exist};
        }
             const infos = await Trainee.create(trainee);
            return infos._id;
    } catch (err) {
      
    }
};


/**  Update trainee  */
exports.updateTrainee = async (req, res) => {
    try {
        const id = req.params.id;
        const traineeInfos = req.body;
        await Trainee.findByIdAndUpdate(
            id,
            traineeInfos,
            {new: true, runValidators: true}
        );
        res.status(200).json({
            status: translate.__('successStatus'),
            message: translate.__('msgUpdateTraineeInfos')
        });
    } catch (err) {
        res.status(404).json({
            status: translate.__('failStatus'),
            message: translate.__('msgTraineeNotFound')
        });
    }
};

/** Get trainee  */
exports.getTrainee = async ( ID ) => {
    try {
        if (ID !== null) {
            return await Trainee.findById(ID);
        }
    } catch (err) {
      
    }
};


/** Get trainee  */
exports.getTraineeInfos = async (req, res) => {
    try {
        const id = req.params.id;
        let trainee = await Trainee.findById(id);
        res.status(200).json({
            status: translate.__('successStatus'),
            trainee
        });
    }
    catch (err) {
        res.status(404).json({
            status: translate.__('failStatus'),
            message:translate.__('msgTraineeNotFound')
        });
    }
};

/** delete Trainee */
exports.deleteTrainee = async (req, res) => {
    User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
    try {
        const id = req.params.id;
        await Trainee.findByIdAndDelete(id);
        res.status(200).json({
            status: translate.__('successStatus'),
            message: translate.__('msgTraineeDeleted')
        });
    } catch (err) {
        res.status(404).json({
            status: translate.__('failStatus'),
            message:translate.__('msgTraineeNotFound')
        });
    }
};

/**  */
exports.demandTrainee = async (ID) => {
    const trainee = await Trainee.findById(ID);
    const {nom,prenom,date_naissance,cv} = trainee;
    return {nom,prenom,date_naissance,cv};
};


/** Trainee List */
exports.traineeList = async (req, res) => {
    User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
    try {
        const traineeList = await Trainee.find();
        if(traineeList.length === 0) {
            res.status(404).json({
                status: translate.__('failStatus'),
                message: translate.__('msgListTraineeEmpty')
            });
        }
        else {
            res.status(200).json({
                status: translate.__('successStatus'),
                length: traineeList.length,
                list: traineeList
            });
        }
    } catch (err) {
        res.status(404).json({
            status: translate.__('failStatus'),
            message:translate.__('error'),
        });
    }
};


/** update infos trainee */
exports.updateInfosTrainee = async (stagiaire, donnes) => {
    try {
        await Trainee.findByIdAndUpdate(
            stagiaire._id,
            donnes,
            {new: true, runValidators: true}
        );
    } catch (err) {
     
    }
};


exports.detailsTrainee = async (req,res) => {
    try {
        const id = req.params.id ;  let details;
        const trainee = await Trainee.findById(id);
        await internshipController.getInternshipsTrainee(trainee._id)
            .then((internships) => {
                details = {trainee,internships};
                res.status(200).json({
                    status: translate.__('successStatus'),
                    details
                });
            });
    }
    catch (err) {
        res.status(404).json({
            status: translate.__('failStatus'),
            message:translate.__('error'),
        });
    }
};


exports.getCV = async (req,res) => {
    try {
        const {data} = req.params;
        const cv = ['CV',data.split('_')[0].toUpperCase(),data.split('_')[1].split('T')[0]].join('-');
        let options = {
            root: path.join('public/files/cv'),
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        };
        let extension = fs.existsSync(`public/files/cv/${cv}.DOCX`) ? 'DOCX' : 'PDF';
            await res.sendFile(`${cv}.${extension}`,options,(err => {
           
        }));
    }
    catch (err) {
        res.status(404).json({
            status: translate.__('failStatus'),
            message:translate.__('error'),
        });
    }
};