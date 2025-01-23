const mongoose = require('mongoose');
/**   */
const familySituationSchema = mongoose.Schema({
    value: {
        type: Object,
        default: "",
    },
});

const familySituation = mongoose.model('familySituation',familySituationSchema);
module.exports = familySituation;