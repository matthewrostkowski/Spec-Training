const data = require("../data");
const sources = require('../models/SourceModel');

module.exports = {
    hello: (req, res) => {
        res.json({"message": "Hello World!"});
    },

    sources: (req, res) => { //source model
        sources.find({}) //find me all the sources in the database, source defined by id, name, email
        //find returns you a json object
        .then(sourceData => { //after you find the sources, then print them all out - one by one
            //picks out each element from json, then works as an interator
            console.log(sourceData); //print each one individually
            res.json({"message": "OK", data: sourceData});
        }) // after you find the sources, re
        .catch(err => { //patch any errors (catch them)
            console.log(err);
            res.json(err);
        });
    },

    add_source: (req,res) => {
        sources.create(req.body.source)
        .then(sourceData => {
            console.log(sourceData);
            res.json({"message": "OK", data: sourceData});
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
    },

    delete_source: () => {
        sources.findOneAndDelete({id: req.params.id})
        .then(sourceData => {
            console.log(sourceData);
            res.json({"message": "OK", data: sourceData});
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
    },
};