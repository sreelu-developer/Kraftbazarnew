const express = require('express');

const InitiateMongoServer = require("./db");
InitiateMongoServer();

const jwt = require('jsonwebtoken')

const AdminData = require('./src/model/Admindata');
const WaitingData = require('./src/model/Waitingdata');
const BuyerData = require('./src/model/buyerData');
const SellerData = require('./src/model/sellerData');
const Craftsdata = require('./src/model/Craftsdata');


const cors = require('cors');
var bodyparser=require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


// share data to angular server
app.use(cors());

const WaitingRouter = require('./src/routes/waitingproducts');
const Waitingdata = require('./src/model/Waitingdata');
app.use('/validate', WaitingRouter)

// username = "admin"
// password = "1234"

function verifyToken(req,res,next){
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
      }
      let token = req.headers.authorization.split(' ')[1]
      if(token === 'null') {
        return res.status(401).send('Unauthorized request')    
      }
      let payload = jwt.verify(token, 'secretKey')
      if(!payload) {
        return res.status(401).send('Unauthorized request')    
      }
      req.userId = payload.subject
      next()

}


app.get('/user', function(req,res){
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    AdminData.find()
    .then(function(admin){
        
        res.send(admin);
    });

    
    
});
app.get('/validate', function(req,res){
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    WaitingData.find()
    .then(function(waitings){
        
        res.send(waitings);
    });

    
    
});
app.post('/addproduct' , function(req, res){
    const pro= new WaitingData({
        pname:req.body.data.pname,
        sname:req.body.data.sname,
        material:req.body.data.material,
        image:req.body.data.image,
        disc:req.body.data.disc
    })
    pro.save();

    console.log('saved')
});

// app.put('/upproduct' , function(req, res){
//     id = req.params.id;
//     console.log(id)
//     const pro= new WaitingData({
//         pname:req.body.data.pname,
//         sname:req.body.data.sname,
//         material:req.body.data.material,
//         image:req.body.data.image,
//         disc:req.body.data.disc
//     })
//     pro.update();
//     // WaitingData.deleteOne({_id:id})
//     console.log('saved')
// });
app.put('/upproduct', (req, res) => {
    console.log(req.body)
    id = req.body.data._id,
            pname=req.body.data.pname,
            sname=req.body.data.sname,
            material=req.body.data.material,
            image=req.body.data.image,
            disc=req.body.data.disc

            WaitingData.findByIdAndUpdate({ "_id": id }, {
            $set: {
                "pname": pname,
                "sname": sname,
                "material": material,
                "image": image,
                "disc": disc,
                
            }
        })
        .then(function() {
            res.send();
        })
})

// const port = process.env.PORT || 5555;

app.post('/login', (req, res)=> {
    // res.header("Access-Control-Allow-orgin","*")
    // res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')

    var user=req.body.user;
    var pwd=req.body.pwd;
    var avatar = req.body.avatar

    if (avatar == "Seller" || avatar == "seller"){
        SellerData.findOne({username:user})
        .then(function(usr){
            if (usr.password == pwd){
                let payload ={subject:user+pwd}
                let token = jwt.sign(payload,'secretKey')
                res.status(200).send({token})

            }
            else{
                res.status(401).send('Invalid Password')

            }
        })
    }
    if (avatar == "Buyer" || avatar == "buyer"){
        BuyerData.findOne({username:user})
        .then(function(usr){
            if (usr.password == pwd){
                let payload ={subject:user+pwd}
                let token = jwt.sign(payload,'secretKey')
                res.status(200).send({token})

            }
            else{
                res.status(401).send('Invalid Password')

            }
        })
    }
    if (avatar == "Admin" || avatar == "admin"){
        AdminData.findOne({username:user})
        .then(function(usr){
            if (usr.password == pwd){
                let payload ={subject:user+pwd}
                let token = jwt.sign(payload,'secretKey')
                res.status(200).send({token})

            }
            else{
                res.status(401).send('Invalid Password')

            }
        })
    }
    
    
   
    });

app.post('/adduser', function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    console.log(req.body);
    var avatar=req.body.user.avatar;
    var user = {
        username:req.body.user.username,
        number:req.body.user.number,
        email:req.body.user.email,
        password:req.body.user.password,
        
    }
    if (avatar=="Seller" || avatar== "seller"){
        var user = new SellerData(user);
        user.save();

    }
    if (avatar=="Buyer" || avatar== "buyer"){
        var user = new BuyerData(user);
        user.save();

    }
})    

app.delete('/delete/:id',(req,res)=>{


   
    id = req.params.id;
    
    WaitingData.deleteOne({_id:id})
    .then(()=>{
        
        res.send();
    })
  });

app.delete('/approve/:id',(req,res)=>{
    id = req.params.id;
    WaitingData.findById(id).then(function(data){
        var items = {

            pname :data.pname,
            sname : data.sname,
            material: data.material,
            image : data.image,
            disc : data.disc

        };
        var craft = Craftsdata(items)
        craft.save();
        

        
    });

    WaitingData.deleteOne({_id:id})
    .then(()=>{
        
        res.send();
    })


})  

app.get('/crafts', function(req,res){
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    Craftsdata.find()
    .then(function(crafts){
        
        res.send(crafts);
    });

});
app.get('/craft/:id', function(req,res){
res.header("Access-Control-Allow-orgin","*")
res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
const id = req.params.id;
Craftsdata.findOne({ _id: id })
.then(function(craft){
    
    res.send(craft);
});

});
app.delete("/deletecraft/:id", (req, res) => {
res.header("Access-Control-Allow-orgin","*")
res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
const id = req.params.id;
Craftsdata.findByIdAndDelete({ _id: id }).then(() => {
  console.log("success");
  res.send();
});
});


const port = process.env.PORT | 3000;
app.listen(port, function () {
    console.log("Listening at " + port);
});