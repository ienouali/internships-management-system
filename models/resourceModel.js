const mongoose = require('mongoose');

/**
 * le Schema de la collection resource
 */
 const resourceSchema = mongoose.Schema({
     chemin : {
         type : String,
         trim : true,
         default : ""
     },
     description : {
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

 const resource = mongoose.model('resource', resourceSchema);
 module.exports = resource;