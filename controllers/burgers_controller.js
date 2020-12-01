const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/index', function(req, res){
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
    burger.updateOne(id, res =>{
        console.table(res);
    })
})

router.post("/api/delete", function(req,res){
    var id = req.body.dataId;
    burger.deleteOne(id, res =>{
        console.table(res)
    })
})

module.exports = router;