const mongoose = require ("mongoose");

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        
    },
    budget: {
        type: Number,
        required: true
        
    },
    color: {
        required: true 
    }

}, { collection: 'budget'})
module.exports = mongoose.model('budget',budgetSchema);