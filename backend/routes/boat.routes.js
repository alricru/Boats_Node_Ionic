module.exports = app => {
    const boats = require("../controllers/boat.controller.js");
    const auth = require("../controllers/auth.js");
  
    var router = require("express").Router();
    var upload = require('../multer/upload');
  
    // Create a new Boat
    router.post("/", upload.single('file'), boats.create);
  
    // Retrieve all Boats
    router.get("/", boats.findAll);

    // Retrieve a single Boat with id
    router.get("/:id", boats.findOne);

    // Retrieve all motors equals an id
    router.get("/user/:id", boats.findAllByUserId);
  
    // Update a Boat with id
    router.put("/:id", upload.single('file'), boats.update);
  
    // Delete a Boat with id
    router.delete("/:id", boats.delete);
  
    app.use('/api/boat', router);
  };