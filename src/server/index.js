const express = require('express');
const db = require('./server/config/db.js');
const cors = require('cors');

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

//Route to get all project created
app.get('/api/project/get',(req,res) =>{
    db.query("SELECT * FROM project",(err,result)=>{
        if (err){
            console.log(err);
        }
        res.send(result)
    })
});
//Route to get all skills
app.get('/api/skills/get',(req,res) =>{
    db.query("SELECT * FROM skills",(err,result)=>{
        if (err){
            console.log(err);
        }
        res.send(result)
    })
});