var express = require("express");

var outfitsController = require("../controllers/outfitsController");

var router = new express.Router();

// Get all quotes (or optionally a specific quote with an id)
router.get("/outfits/:id?", outfitsController.index);
// Create a new quote using data passed in req.body
//router.post("/outfits",outfitsController.create);
// Update an existing quote with a speicified id param, using data in req.body
//router.patch("/outfits/:id", outfitsController.update);
// Delete a specific quote using the id in req.params.id
//router.delete("/outfits/:id", outfitsController.destroy);

module.exports = router;