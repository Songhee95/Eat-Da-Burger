const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function(req, res){
    burger.selectAll(data =>{
        var burgerObj = {
            burger: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj)
    })
})
// router.post("/api/burgers", function(req,res){
//     res.json("posting");
//     //burger.selectAll();
// })

// router.get("/api/burgers", function(req,res){
//     //res.send(data);
// })


module.exports = router;