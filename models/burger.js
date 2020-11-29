const orm = require('../config/orm.js');

const burger = {
    selectAll: function(cb){
       orm.selectAll("burgers" , res =>{
           cb(res);
       })
    },
    insertOne: function(data,cb){
        orm.insertOne(data, res =>{
            cb(res);
        })
    }
}

module.exports = burger;