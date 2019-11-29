const mongoose = require('mongoose');
require('../models/db');
var User = require('../models/User');
const passport = require('passport');
const jwtHelper = require('../config/jwtHelper');

const bcrypt = require('bcryptjs');
const _ = require('lodash');

/*===============get all users============== */
module.exports.lister = (req, res) => {
    console.log('I am in lister function');
    User.find({}, (err, users) => {
        if (!err) {
            res.send(users);
            console.log(users);
        }
        else {
            console.log('error in retrieving users : ' + JSON.stringify(err, undefined, 2));
        }
    });

}
// handle register

module.exports.register = (req, res, next) => {
    console.log('inside register function');
    var user = new User();
    user.fullName = req.body.fullName;
    console.log(req.body.fullName);
    user.email = req.body.email;
    console.log(req.body.email);
    user.password = req.body.password;
    user.role = req.body.role;
    console.log('before saving');

    user.save(
        (err, doc) => {
            if (!err) {
                res.send(doc);
                console.log('xxxxx' + doc);
            }
            else {
                console.log(err.code);
                if (err.code == 11000)
                    res.status(422).send(['Duplicate email adrress found.']);
                else
                    return next(err);

            }

        })
    console.log('after saving');

}
//login handle
module.exports.login = (req, res, next) => {
    console.log("I am in login func");
    passport.authenticate('local', (err, user, info) => {
        if (err) return res.status(400).json(err);
        else if (user) {
            console.log(user);
            console.log("token" + user.generateJWT());

            return res.status(200).json({ "token": user.generateJWT(user._id) });
        }
        else return res.status(404).json(info);
    })(req, res);
}


module.exports.userProfile = (req, res) => {
    console.log('userPro the request id' + req._id);
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user) {
                return res.status(404).json({ status: false, message: 'User record not found.' });
            }
            else {
                console.log('the user is correct' + user);
                return res.status(200).json({ status: true, user: _.pick(user, ['fullName', 'email', 'role']) });
            }
        });
}
// module.exports.update = (req, res) => {
//     console.log("id"+id);
//     User.findById(req.params.id, (err, user) => {
//         console.log("updat user "+ user);
//         if (user) {
          
//             user.fullName = req.body.fullName;
//             user.email = req.body.email;
//             user.password = req.body.password;
//             user.role = req.body.role;
//             user.save();

//         }
//     });
// }

module.exports.update = (req, res, next) => {

    let id = req.params.id;
    console.log(id);

    User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data, next) => {
        console.log(req.body);
        if (error) {
            console.log(error)
            return next(error);
        } else {
            
            res.json(data);


        }
    });
}

    module.exports.delete = (req, res, next) => {
        console.log(req.params.id);
        // User.findOneAndRemove(req.params.id, (error, data) => {
        User.findOneAndDelete({ _id: req.params.id }, (error, data) => {
            if (error) {
                return next(error);
            } else {
                console.log('deleted successfully');

                res.status(200).json({ msg: data });
            }
        })
    }
    module.exports.getUserById = (req, res) => {
        let id = req.params.id;
        User.findById(id, (err, user) => {
            console.log("the user u r looking 4: " + user);
            res.json(user);
        });
    }


