//Budget API
//var fs =require('fs');
const express = require('express');
//const BodyParser = require("body-parser");
const mongoose = require ("mongoose"); 
const budgetModel = require ("./models/budget_schema");
const cors = require('cors');
const app=express();
const port=3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',express.static('public'));
let url = 'mongodb://localhost:27017/personal_budget';

        
app.get('/budget',async(req,res)=>{
    mongoose.connect(url,{ useUnifiedTopology: true ,useNewUrlParser: true})
        .then(()=>{
            console.log("Connected to MongoDB Successfully");
            budgetModel.find({})
                .then((data)=>{
                console.log(data)
                res.json(data)
                res.send(data)
                mongoose.connection.close();
                })
                .catch((connectionError)=>{
                    console.log(connectionError);
                })
              
        })
        .catch((connectionError)=>{
            console.log(connectionError);

        } )
});

app.post('/budget',async(req,res)=> {
    let newData= new budgetModel({
        title: req.body.title,
        budget: req.body.budget,
        color: req.body.color
    });
    budgetModel.insertMany(newData)
        .then((data)=>{
            console.log(data)
            res.send(data)
            mongoose.connection.close();
        })
        .catch((connectionError)=>{
            console.log(connectionError);
        })
});

app.use(cors());



app.listen(port,()=> {
    console.log(`API served at http://localhost:${port}`)
});