const mongoose = require('mongoose');
/**   */
const agencySchema = mongoose.Schema({
    value: {
        type: Object,
        default: ""
    }
});

const agence = mongoose.model('agence',agencySchema);
module.exports = agence;