const mongoose = require('mongoose');

/**
 *  Schema of utilisateurs Collection  
 */
const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : [true, 'Le Champ Email Est Obligatoire'],
        unique : true, 
        trim : true
    },

    mot_de_passe : {
        type : String,
        required : [true, 'Le Champ Mot De Passe Est Obligatoire'],
        trim :true,
        minlength :4,
    },
      
    role : {
        type : String,
        default : 'admin'
    },

    lang : {
        type : String,
        default : 'fr'
    }
});


const utilisateur = mongoose.model('utilisateur', userSchema);
module.exports = utilisateur;