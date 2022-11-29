const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// WRITE THE SCHEMA HERE - spec source is an obejct with an id, name, and email -- specify types as well
//required flag means that person filling out request has to fill out this field for it to be valid (like a google form)
const sourceSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true},
    email: { type: String, required: true }
});

const sources = mongoose.model('spec_sources', sourceSchema);

module.exports = sources;