const User = require('./../models/userModel');
const tools = require('../config/tools');
const i18n = require('i18n-nodejs');
let translate;

/** authentication */

exports.login = async (req, res) => {
    try {
        User.find({}, {lang: 1}).then(l => translate = new i18n(l[0].lang, tools.config.langFile));
        const {email,password} = req.body;
        const users = await  User.find();
        if(users.length > 0) {
            const user = await User.findOne({email,mot_de_passe:password});
            if(user !== null) {
                res.status(200).json({
                    status:  translate.__('successStatus'),
                    token: 1
                });
            } else {
                res.status(400).json({
                    status: translate.__('failStatus'),
                    message: translate.__('msgAuthFail')
                });
            }
        } else {
           const firstUser = {
                "email" : email,
                "mot_de_passe" : password,
                "role" : "super-admin"
            };
           const u =  await User.create(firstUser);
            res.status(200).json({
                status: translate.__('successStatus'),
                token: 1
            });
        }
    }
    catch (err) {
        res.status(400).json({
            status:translate.__('failStatus'),
            message: translate.__('msgAuthFail')
        });
    }
};


/**
 *   addUser function  
 *   Add new user in database 
 */
exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: translate.__('successStatus'),
            data: {  user: newUser }
        })
    }
    catch (err) {
        res.status(400).json({
            status: translate.__('failStatus'),
            message: translate.__('error')
        })
    }
};


/**
 *   getAllUsers function  
 *   Get all users data  from database 
 */
exports.getAllUsers = async (req, res) => {
    try {
        const queryObj = { ...req.query };
        const exclFields = ['page', 'sort', 'limit', 'fields'];
        exclFields.forEach(el => delete queryObj[el]);

        const users = await User.find();
        res.status(200).json({
            status: translate.__('successStatus'),
            data: {
                users
            }
        })
    }
    catch (err) {
        res.status(404).json({
            status: translate.__('failStatus'),
            message: translate.__('usersNotFound')
        })
    }
};

/**
 *   updateUser function  
 *   update user data  from database 
 */
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.status(200).json({
            status: translate.__('successStatus'),
            data: {
                user
            }
        })
    }
    catch (err) {
        res.status(404).json({
            status: translate.__('failStatus'),
            message: translate.__('msgUserNotFound')
        })
    }
};


/**
 *   deleteUser function  
 *   delete user  from database 
 */
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: translate.__('successStatus'),
            message: translate.__('userDeleted')
        });
    }
    catch (err) {
        res.status(400).json({
            status: translate.__('failStatus'),
        });
    }
};