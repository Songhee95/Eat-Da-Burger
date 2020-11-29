const connection = require("./connection");

const orm = {
    selectAll : function(cb){
        var query = "SELECT * FROM burgers";
        connection.query(query, (err, res) =>{
            if(err) throw err;
            cb(res);
        })
    },
    insertOne : function(input){
        var query = "INSERT INTO burgers(burger_name) VALUES('"+input+"')";
        connection.query(query, (err, res)=>{
            if(err) throw err;
            cb(res);
        })
    },
    updateOne : function(){
        //function goes here
    }
}

module.exports = orm;