const { application } = require("express");
const express = require("express");
const Waitingdata = require("../model/Waitingdata");
var WaitingRouter = express.Router();
const WaitingData = require('../model/Waitingdata');


WaitingRouter.get('/verify', function(req,res){
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    WaitingData.find()
    .then(function (waitingproducts){
        res.send(waitingproducts);
    })
})

WaitingRouter.post('/product', function(req,res){
    let id = req.body.id;
    WaitingData.findById(id).then(function(data){
        res.send(data);
    });
});



module.exports = WaitingRouter;




