const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost/mydb',{ useNewUrlParser: true,  useCreateIndex: true,
},function(err,db){
        if(err){
            console.log(err);
        }
        else {
            console.log('suceesfully connected to mongo db');
           // db.close();
        }
      });
    

 //var db =mongoose.connection;
module.exports = mongoose;
require('./User');
