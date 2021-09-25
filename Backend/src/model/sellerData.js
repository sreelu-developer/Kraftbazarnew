const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adminone:adminone@kraftsbazardatas.vkggh.mongodb.net/KraftsBazarDatas?retryWrites=true&w=majority');

const Schema = mongoose.Schema;


var SellerSchema = new Schema({
    username : String,
    number : Number,
    email : String,
    password : String,
    
});

var Sellerdata = mongoose.model('seller', SellerSchema);

module.exports = Sellerdata;