module.exports = function() {
    const projects = require("../controllers/projects.controller.js");
    const express = require('express');
    const app =  express();
    
    let router = require("express").Router();
    
    // Creating a new Tutorial
    router.post("/", projects.create);
    
    // Retrieving all the projects
    router.get("/", projects.findAll);
    
    // Retrieving all the published projects
    router.get("/published", projects.findAllPublished);
    
    // Retrieving a single Tutorial with id
    router.get("/:id", projects.findOne);
    
    // Updating a Tutorial with ID
    router.put("/:id", projects.update);
    
    // Deleting a Tutorial with ID
    router.delete("/:id", projects.delete);
    
    // Creating a new Tutorial
    router.delete("/", projects.deleteAll);
    
    app.use('/api/projects', router);
    };