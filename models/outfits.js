var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var outfitSchema = Schema({
  season:{
  	type: String,
  	required: true,
  	unique: true
  },
  imgURL:{
  	type: String,
  	required:true
  },
  comments:[{
  	text:{
  		type:String
  	}
  }]
});

var Outfit = mongoose.model("Outfit", outfitSchema);

module.exports = Outfit;