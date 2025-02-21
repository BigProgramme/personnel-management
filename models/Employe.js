const mongoose = require('mongoose');

// create a employee schema:
const EmployeSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
        
    },
    prenom: {
        type: String,
        required: true
        },

    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    },
    photo: {
        type: String 
    }
})

// we can export this moduf to use it in other files.
module.exports = mongoose.model('Employe', EmployeSchema);