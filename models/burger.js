const orm = require('../config/orm.js');

const burger = {
    selectAll: function(){
       orm.selectAll(res =>{
           console.table(res);
       })
    }
}

module.exports = burger;