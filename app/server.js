const express = require('express');
//const db = require('../app/config/db.config');
const cors = require('cors');
const db = require("../app/models");
const projects = require("../app/routes/projects.routes.js");
db.sequelizeConnect.sync();
let corsOptions = {
    origin: "http://localhost:8081"
};
const app = express();
app.use(cors(corsOptions));
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
//Route to get all project created
/*app.get('/api/project/get',(req,res) =>{
    db.query("SELECT * FROM project",(err,result)=>{
        if (err){
            console.log(err);
        }
        res.send(result)
    })
    db.destroy();
});
//Route add project position
app.post('/api/project/add',(req,res)=>{
    db.query("INSERT INTO `project` (`id`, `title`, `description`, `color`, `icon_name`, `created_at`, `updated_at`) VALUES (NULL, 'test', 'test', 'black', 'project.png', NULL, NULL)",(err,result)=>{
        if (err){
            console.log(err);
        }
        res.send(result)
    });
})
//UPDATE `project` SET `created_at` = '2023-10-12 18:19:34', `updated_at` = '2023-10-12 18:19:34' WHERE `project`.`id` = 1;
//Route to get all skills
app.get('/api/skills/get',(req,res) =>{
    db.query("SELECT * FROM skills",(err,result)=>{
        if (err){
            console.log(err);
        }
        res.send(result)
    })
});*/
//db.end();