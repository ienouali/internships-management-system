const mongoose = require('mongoose');
/**   */
const departmentSchema = mongoose.Schema({
    value: {
        type: Object,
        default: ""
    }
});

const department = mongoose.model('department',departmentSchema);
module.exports = department;