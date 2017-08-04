var Clothes = require("../models/outfits");

module.exports = {
	index: function(req, res){
		var query;
		if(req.query){
			query = req.query;
		}
		else{
			query = req.params.id ? { _id: req.params.id } : {};
		}
		Clothes.find(query)
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
	}
}