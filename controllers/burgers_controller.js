const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get("/", function(req, res){
    burger.selectAll(data =>{
        var burgerObj = {
            burger: data
        };
        res.render("index", burgerObj)
    })
})

router.post("/api/burgers", function(req,res){
    var data = req.body.input;
    burger.insertOne(data, res =>{
        console.table(res);
    })
})

router.post("/api/devour", function(req,res){
    var id = req.body.dataId;
    burger.updateOne(id, result =>{
       if(result.changeRows == 0){
           return res.status(404).end()
       }else{
           res.status(200).end();
       }
    })
})

router.post("/api/delete", function(req,res){
    var id = req.body.dataId;
    burger.deleteOne(id, result =>{
        if(result.affectedRows ==0){
            return res.status((404)());
        }else{
            res.status(200).end();
        }
    })
})

module.exports = router;