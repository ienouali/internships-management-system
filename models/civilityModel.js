const mongoose = require('mongoose');
/**   */
const civilitySchema = mongoose.Schema({
    value: {
        type: Object,
        default: "",
    },
});

const civilite = mongoose.model('civilite',civilitySchema);
module.exports = civilite;