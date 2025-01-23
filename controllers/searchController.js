const Trainee = require('../models/traineeModel');
const tools = require('../config/tools');
const i18n = require('i18n-nodejs');
const translate = new i18n("en", tools.config.langFile);

/** Search */
exports.search = async (req, res) => {
    try {
        const value = req.params.value;
        const values = await Trainee.find(
            {
               $or: [{nom: {$regex: value, $options: "i"}},
                    {prenom: {$regex: value, $options: "i"}},
                    {cin: {$regex: value, $options: "i"}},
                    {email: {$regex: value, $options: "i"}},
                    {tel: {$regex: value, $options: "i"}},
                ]
            });
        res.status(200).json({
            status: translate.__('successStatus'),
            values,
        });
    } catch (err) {
        res.status(404).json({
            status: translate.__('failStatus'),
            message: translate.__('error')
        });
    }
};
