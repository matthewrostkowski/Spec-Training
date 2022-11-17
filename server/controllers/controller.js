const data = require("../data");

module.exports = {
    hello: (req, res) => {
        res.json({"message": "Hello World!"});
    },

    sources: (req, res) => {
        res.json({"message": "Success", data: data.sources});
    },

    add_source: (req,res) => {
        data.sources.push(req.body.source);
        res.json({"message": "Success", data: data.sources});
    },

    delete_source: () => {
        data.sources = data.sources.filter(c => c.id !== req.params.id);
        res.json({"message": "Success", data: data.sources});
    },
};