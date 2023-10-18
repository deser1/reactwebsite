    const projects = require("../controllers/projects.controller.js");
    const express = require('express');
    const app =  express();
    
    const router = express.Router();
    
    // Creating a new Tutorial
    router.post("/", projects.createProjects);
    
    // Retrieving all the projects
    router.get("/", projects.findAll);
    
    // Retrieving all the published projects
    router.get("/published", projects.findAllPublished);
    
    // Retrieving a single Tutorial with id
    router.get("/:id", projects.findOne);
    
    // Updating a Tutorial with ID
    router.put("/:id", projects.updateProjects);
    
    // Deleting a Tutorial with ID
    router.delete("/:id", projects.deleteProjects);
    
    // Creating a new Tutorial
    router.delete("/", projects.deleteAll);
    
    //app.use('/api/projects', router);
    
    module.exports = router;