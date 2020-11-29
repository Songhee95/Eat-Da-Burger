const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function(req, res){
    console.log("getting data; "+ data);
    res.render("index")
})
let data;
router.post("/api/burgers", function(req,res){
    console.log(req.body.input);
    res.json("posting");
    burger.selectAll();
})

router.get("/api/burgers", function(req,res){
    res.send(data);
})


module.exports = router;