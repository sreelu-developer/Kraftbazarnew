const mongoose = require("mongoose");
const DB = "mongodb+srv://adminone:adminone@kraftsbazardatas.vkggh.mongodb.net/KraftsBazarDatas?retryWrites=true&w=majority";

const InitiateMongoServer = async () =>{
    try{
        await mongoose.connect(DB,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connection established");
    }catch(e){
        console.log(e);
        throw e;
    }
};
module.exports = InitiateMongoServer;