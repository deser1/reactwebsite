//import { Op } from '@sequelize/core';
const db = require("../models");
const Projects = db.projects;
//const Op = db.Sequelize.Op;
const { Op } = require("sequelize");
// Create and Save a new Project
const createProjects = (req, res) => {
    // Validating the request
    if (!req.body.title) {
        res.status(400).send ({
            message: "Content can be placed here!"
        });
        return;
    }
    Projects = {
        title: req.body.title,
        description: req.body.description,
        color: req.body.color,
        icon_name: req.body.icon_name
        };
    // Save Projects in the database
    Projects.create(Projects)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the projects."
        });
    });
};

// Retrieve all Projects from the database.
const findAll = (req, res) => {

    const title = req.query.title; //?query=title
    console.log(title);
    let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    console.log(JSON.stringify(condition)); //return null ??
    
    Projects.findAll({ 
        attributes: ["id", "title", "description", "color", "icon_name", "active"],
        where: condition 
    })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message+" test1" || "Some error occurred while retrieving projects."
      });
    });
};

// Find a single Project with an id
const findOne = (req, res) => {
    const id = req.params.id;

  Projects.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving projects with id=" + id
      });
    });
};

// Update a Project by the id in the request
const updateProjects = (req, res) => {
    const id = req.params.id;

  Projects.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Projects was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update projects with id=${id}. Maybe projects was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating projects with id=" + id
      });
    });
};

// Delete a Project with the specified id in the request
const deleteProjects = (req, res) => {
    const id = req.params.id;

  Projects.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Projects was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete projects with id=${id}. Maybe projects was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete projects with id=" + id
      });
    });
};

// Delete all Projects from the database.
const deleteAll = (req, res) => {
    Projects.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Projects were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all projects."
          });
        });
};

// Find all published Projects
const findAllPublished = (req, res) => {
    Projects.findAll({ where: { published: true } })

        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: err.message || "Some error occurred while retrieving projects."
        });

    });
};
module.exports = {
    createProjects,
    findAll,
    findOne,
    updateProjects,
    deleteProjects,
    deleteAll,
    findAllPublished
}