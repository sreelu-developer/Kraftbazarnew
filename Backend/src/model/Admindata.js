const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adminone:adminone@kraftsbazardatas.vkggh.mongodb.net/KraftsBazarDatas?retryWrites=true&w=majority');

const Schema = mongoose.Schema;


var AdminSchema = new Schema({
    username : String,
    title : String,
    mail : String,
    contact : String,
    image : String,
    password : String
});

var Admindata = mongoose.model('admin', AdminSchema);

module.exports = Admindata;