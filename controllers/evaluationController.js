const Evaluation = require('./../models/evaluationModel');

/**
 */
exports.ajouter_evaluation = async (req, res) => {
    try {
        const evaluation = req.body;
        const data = await Evaluation.create(evaluation);
        res.status(201).json({
            status: 'success',
            data
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'invalid data sent !'
        })
    }
};


/**
 */
recuperer_ID_evaluation = async (evaluation) => {
    try {
        const { } = evaluation;
        const data = await Rapport.findOne({});
        return data._id;
    }
    catch (err) {}
};