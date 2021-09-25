const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adminone:adminone@kraftsbazardatas.vkggh.mongodb.net/KraftsBazarDatas?retryWrites=true&w=majority');

const Schema = mongoose.Schema;
var CraftSchema = new Schema({
    pname : String,
    sname : String,
    material: String,
    image : String,
    disc : String

});

var Craftsdata = mongoose.model('craft', CraftSchema);
module.exports = Craftsdata;