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

mongoose.connect(url,{ useUnifiedTopology: true ,useNewUrlParser: true})       
app.get('/budget',async(req,res)=>{
    
    try {
        const budget_data= await budgetModel.find();
            res.json(budget_data)
            mongoose.connection.close()
    } catch(err){
        res.json({message:err});
    } 
});

app.post('/budget',async(req,res)=> {
    let newData= new budgetModel({
        title: req.body.title,
        budget: req.body.budget,
        color: req.body.color
    });
    try {
        const saved_data= await newData.save();
            res.json(saved_data)
            
    } catch(err){
        res.json({message:err});
    } 
});

app.use(cors());



app.listen(port,()=> {
    console.log(`API served at http://localhost:${port}`)
});