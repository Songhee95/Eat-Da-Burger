const connection = require("./connection");

const orm = {
    selectAll : function(table, cb){
        var query = "SELECT * FROM "+table;
        connection.query(query, (err, res) =>{
            if(err) throw err;
            cb(res);
        })
    },
    insertOne : function(input,cb){
        var query = "INSERT INTO burgers(burger_name) VALUES(?)";
        connection.query(query,input, (err, res)=>{
            if(err) throw err;
            cb(res);
        })
    },
    updateOne : function(){
        //function goes here
    }
}

module.exports = orm;