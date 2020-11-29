const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function(req, res){
    burger.selectAll(data =>{
        var burgerObj = {
            burger: data
        };
        res.render("index", burgerObj)
    })
})

router.post("/api/burgers", function(req,res){
    var data = req.body.input;
    console.log(data);
    burger.insertOne(data, res =>{
        console.table(res);
    })
})


module.exports = router;