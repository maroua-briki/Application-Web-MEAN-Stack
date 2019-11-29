require('./models/db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const CircularJSON = require('circular-json');
const session =require('express-session'); 
passport=require('passport');

const app = express();


require('./config/passport')(passport);


  //passport middleware

app.use(passport.initialize());
app.use(passport.session());



/* ===========middlewares =====================*/
//body parser
app.use(bodyParser.json());
app.use(cors());

//express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  }));
//Routes
app.use('/users', require('./routes/users.js'));
 
//erreor handler
app.use((err,req,res,next)=>{
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }});

const PORT =process.env.PORT ||3000;
app.listen(PORT,console.log(`Server started on port ${PORT}`));
module.exports=[]