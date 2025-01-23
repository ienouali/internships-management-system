const mongoose = require('mongoose');
/**   */
const formationSchema = mongoose.Schema({
    value: {
        type: Object,
        default: "",
    },
});

const formation = mongoose.model('formation',formationSchema);
module.exports = formation;