const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adminone:adminone@kraftsbazardatas.vkggh.mongodb.net/KraftsBazarDatas?retryWrites=true&w=majority');

const Schema = mongoose.Schema;


var BuyerSchema = new Schema({
    username : String,
    number : String,
    email : String,
    password : String,
    
});

var Buyerdata = mongoose.model('buyer', BuyerSchema);

module.exports = Buyerdata;