//Budget API
//var fs =require('fs');
const express = require('express');
const BodyParser = require("body-parser");
const mongoose = require ("mongoose"); 
const budgetModel = require ("./budget_schema");
const cors = require('cors');
const app=express();
const port=3001;
app.use(BodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use('/',express.static('public'));
let url = 'mongodb://localhost:27017/personal_budget';
const routes =require('../routes');

app.use('/budget',routes);

        
app.get('/budget',(req,res)=>{
    res.send("budget get route");
});

app.post('/budget',async(req,res)=> {
    res.send("budget post route");
});
mongoose.connect(url,{ useUnifiedTopology: true ,useNewUrlParser: true})



app.listen(port,()=> {
    console.log(`API served at http://localhost:${port}`)
});