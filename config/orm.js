const connection = require("./connection");

const orm = {
    selectAll : function(table, cb){
        var query = "SELECT * FROM "+table;
        connection.query(query, (err, res) =>{
            if(err) throw err;
            console.table(res);
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
    updateOne : function(where, cb){
        var query = "UPDATE burgers SET devoured=true WHERE id=?"
        connection.query(query, where, (err, res)=>{
            if(err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;