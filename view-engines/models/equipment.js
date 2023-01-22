const mongoose = require('mongoose');

const Schema = mongoose.Schema; 
// Schema is the thing that a model wraps around. it defines the structure of the document to be stored in the collection

const equipmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Equipment = mongoose.model('Equipment', equipmentSchema); // looks for equipments collection in the database

module.exports = Equipment;