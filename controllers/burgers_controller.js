const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function(req, res){
    res.render("index")
})
let data;
router.post("/api/burgers", function(req,res){
    console.log(req.body.input);
    res.json("posting");
    data = req.body.input;
})

router.get("/api/burgers", function(req,res){
    res.send(data);
})


module.exports = router;