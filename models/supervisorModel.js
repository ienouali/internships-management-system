const mongoose = require('mongoose');
/**
 * le Schema de la collection encadrants
 */
 const encadrantSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, `Le nom de l'encadrant est obligatoire`],
        trim: true
    },
    lastname: {
        type: String,
        required: [true, `Le prenom de l'encadrant est obligatoire`],
        trim: true
    },
    email: {
        type: String,
        required: [true, `L'email de l'encadrant est obligatoire`],
        trim: true,
    },
    phone: {
        type: String,
        required: [true, 'Le numero de telephone est obligatoire'],
        trim: true
    },
 });

 const encadrant = mongoose.model('encadrant',encadrantSchema);
 module.exports = encadrant;