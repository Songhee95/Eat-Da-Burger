const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function(req, res){
    res.render("index")
})

router.post("/api/burgers", function(req,res){
    res.json("posting")
})


module.exports = router;