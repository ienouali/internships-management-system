const Rapport = require('./../models/rapportModel');

/**
 *   La fonction ajouter_rapport_Et_recuperer_son_ID
 *   ajouter les informations du rapport du stagiaire dans la base de donnée
 */
exports.ajouter_rapport = async (req, res) => {
    try {
        const rapport = req.body;
        const data = await Rapport.create(rapport);
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
 *   La fonction modifier_rapport
 *   modifier les informations d'un rapport dans la base de donnée
 */
exports.modifier_rapport = async (req, res) => {
    try {
        const id = req.params.id;
        const donnes = req.body;
        await Rapport.findByIdAndUpdate(
            id,
            donnes,
            { new: true, runValidators: true }
        );
        res.status(200).json({
            status: 'success',
            message: 'Donnés modifier avec succés !'
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: "rapport non trouvé , echec de modification !"
        });
    }
};


/**
 *   La fonction recuperer_rapport
 *   recuperer un rapport existe dans la base de donnée
 */
exports.recuperer_rapport = async (req, res) => {
    try {
        const id = req.params.id;
        const rapport = await Rapport.findById(id);
        res.status(200).json({
            status: 'success',
            rapport
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: "rapport non trouvé !"
        });
    }
};

/**
 *   La fonction supprimer_rapport
 *   supprimer un rapport existe dans la base de donnée
 */
exports.supprimer_rapport = async (req, res) => {
    try {
        const id = req.params.id;
        await Rapport.findByIdAndDelete(id);
        res.status(200).json({
            status: 'success',
            message: 'Rapport supprimer avec succés !'
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: "Rapport non trouvé !"
        });
    }
};


/**
 *   La fonction liste_rapports
 *   recuperer la liste des rapports dans la base de donnés
 */
exports.liste_rapports = async (req, res) => {
    try {
        const listeRapports = await Rapport.find();
        res.status(200).json({
            status: 'success',
            nombre: listeRapports.length,
            data: listeRapports
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Liste des rapports non trouvé !'
        });
    }
};