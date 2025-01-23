const mongoose = require('mongoose');

/**
 * le Schema de la collection stage
 */
const stageSchema = mongoose.Schema({
    agence: {
        type: String,
        required: [true, 'L agence est obligatoire'],
        trim: true
    },
    type_de_stage: {
        type: String,
        required: [true, 'Le type de stage est obligatoire'],
        trim: true
    },
    date_debut_stage: {
        type: Date,
        required: [true, 'La date de debut de stage est obligatoire'],
    },
    date_fin_stage: {
        type: Date,
        required: [true, 'la date de debut de stage est obligatoire'],
    },
    departement: {
        type: String,
        required: [true, 'Le champ departement est obligatoire'],
        trim: true
    },
    sujet: {
        type: String,
        trim: true,
        default: ""
    },
    commentaire: {
        type: String,
        trim: true,
        default: ""
    },
    statut: {
        type: String,
        trim: true,
        default: 'En attente de décision'
    },
    encadrant: {
        type: Object,
        default: "",
    },
    stagiaire: {
        type: Object,
        default: "",
    },
  
});


const stage = mongoose.model('stage',stageSchema);
module.exports = stage;