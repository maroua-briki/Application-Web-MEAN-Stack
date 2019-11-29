const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
require('../config/config.json');
const JWT_SECRET="SECRET#123";
var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength : [8,'Password must be atleast 8 character long']
    },
    role:{
        type:String,
        required: 'Role can\'t be empty',

    },
    saltSecret: String
});

// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


//methods
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
userSchema.methods.generateJWT=(identifiant)=>{
   
    console.log('generate token'+jwt.sign({_id:this._id},"SECRET#123",{expiresIn:"22m"}))
    // return jwt.sign({_id:this._id},"SECRET#123",{expiresIn:"22m"});
    return jwt.sign({_id:identifiant},"SECRET#123",{expiresIn:"22m"});


}
//mongoose.model('User', userSchema);
module.exports = mongoose.model("User", userSchema);


