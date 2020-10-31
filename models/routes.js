const express = require('express');
const router =express.Router();
const budgetModel = require ("./budget_schema");

router.post('/', async(req,res)=> {
    const newData= new budgetModel({
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
router.get('/',async(req,res)=>{
    try {
        const budget_data= await budgetModel.find();
            res.json(budget_data)
    } catch(err){
        res.json({message:err});
    } 
});


module.exports =router;