const mongoose = require('mongoose');

/**
 * le Schema de la collection rapports
 */
 const rapportSchema = mongoose.Schema({
     path : {
         type : String,
         trim : true,
         default : ""
     },
     remarque : {
        type : String,
        trim : true,
        default : ""
     },
     stage : {
        type: Object,
        default: {
            _id : ""
        },
    },
    
 });

 const rapport = mongoose.model('rapport', rapportSchema);
 module.exports = rapport;