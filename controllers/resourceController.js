const Resource = require('./../models/resourceModel');


/**
 *   La fonction ajouter_resource_Et_recuperer_son_ID
 *   ajouter les informations du resource du sujet du stagiaire dans la base de donnée
 */
exports.ajouter_resource = async (req, res) => {
    try {
        const resource = req.body;
        const data = await Resource.create(resource);
        res.status(201).json({
            status: 'success',
            data
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Données envoyés invalide !'
        });
    }
};


/**
 *   La fonction ID_resource
 *   récuper ID  du resource du stagiaire  
 */
recuperer_ID_resource = async (rapport) => {
    try {
        const { chemin, description } = rapport;
        const data = await Resource.findOne({ chemin, description });
        return data._id;
    }
    catch (err) {
        return err;
    }
};