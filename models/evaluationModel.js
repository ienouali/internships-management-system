const mongoose = require('mongoose');

/**
 * le Schema de la collection evaluations
 */
const evaluationSchema = mongoose.Schema({
    note: {
        type: String,
        trim: true,
        default: ""
    },
    observation: {
        type: String,
        trim: true,
        default: ''
    },
    stage : {
        type: Object,
        default: {
            _id : ""
        },
    },

});

const evaluation = mongoose.model('evaluation', evaluationSchema);
module.exports = evaluation;