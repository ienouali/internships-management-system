const mongoose = require('mongoose');
/**   */
const typeInternshipSchema = mongoose.Schema({
    value: {
        type: Object,
        default: "",
    },
});

const typeIntern = mongoose.model('typeIntern',typeInternshipSchema);
module.exports = typeIntern;