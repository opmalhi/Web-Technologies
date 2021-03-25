const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    regNo: {type:Number, required:true},
    name: {type:String, required:true},
    gender: {type:String, required:true},
    department: {type:String, required:true},
    semester: {type:String, required:true},
    section: {type:String, required:true}
});

module.exports = mongoose.model('Student', StudentSchema);