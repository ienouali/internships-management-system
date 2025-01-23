const mongoose = require('mongoose');

/**
 * le Schema de la collection stagiaire
 */
const stagiaireSchema = mongoose.Schema({
    civilite: {
        type: String,
        required: [true, 'La civilite est obligatoire'],
        trim: true
    },
    nom: {
        type: String,
        required: [true, 'Le nom est obligatoire'],
        trim: true
    },
    prenom: {
        type: String,
        required: [true, 'Le prenom est obligatoire'],
        trim: true
    },
    date_naissance: {
        type: Date,
        // required: [true, 'La date de naissance est obligatoire'],
        trim: true,
        default : ""
    },
    email: {
        type: String,
        // required: [true, `L'email est obligatoire`],
        trim: true,
        default : ""
    },
    tel: {
        type: String,
        required: [true, 'Le numero de telephone est obligatoire'],
        trim: true
    },
    adresse: {
        type: String,
        // required: [true, `L'adresse est obligatoire`],
        trim: true,
        default : ""
    },
    cin: {
        type: String,
        // required: [true, 'Le CIN est obligatoire'],
        trim: true,
        default : ""
    },
    etat_civil: {
        type: String,
        // required: [true, `L'etat civil est obligatoire `],
        trim: true,
        default : ""
    },
    formation: {
        type: String,
        required: [true, `La formation est obligatoire `],
        trim: true
    },
    linkedin: {
        type: String,
        trim: true,
        default : ""
    },
    cv: {
        type: String,
        // required: [true, `Le cv est obligatoire `],
        trim: true,
        default : ""
    }, 
});

const stagiaire = mongoose.model('stagiaire',stagiaireSchema);
module.exports = stagiaire;