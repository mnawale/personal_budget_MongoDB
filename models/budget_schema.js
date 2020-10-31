const mongoose = require ("mongoose");

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
        
    },
    budget: {
        type: Number,
        required: true
        
    },
    color: {
        type: String,
        required: true,
        maxlength: 7,
        validate: /^(#)[0-9a-fA-F]+$/
    }

}, { collection: 'budget'})
module.exports = mongoose.model('budget',budgetSchema);