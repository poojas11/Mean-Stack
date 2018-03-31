var dbLogin = require('../models/login');
var jwt = require('jsonwebtoken')

exports.registration = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Please enter all details"
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, loginData) => {
            if (err) {
                res.json({

                    success: false,
                    msg: "Database error"
                })

            } else if (!loginData || loginData == null) {
                var newPerson = new dbLogin({
                    email: req.body.email,
                    password: req.body.password
                })

                newPerson.save((err, saveData) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: "Error while saving data"
                        })
                    } else {
                        res.json({
                            success: false,
                            msg: "You have already registered. Please sign in."
                        })
                    }
                })
            }
        })
    }
}

exports.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Please enter all details"
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, ldata) => {

            if (err) {

                res.json({

                    success: false,
                    msg: "Database error",
                    err: err
                })

            } else if (!ldata || ldata == null) {
                res.json({
                    success: false,
                    msg: "Please register first"
                })

            } else if (ldata.password == req.body.password) {
                var tokenData = {
                    email: ldata.email
                }
                var token = jwt.sign(tokenData, req.app.get('secret'));
                res.json({
                    success: true,
                    msg: "Login Successfully!",
                    token: token
                })
            } else {
                res.json({
                    success: false,
                    msg: "Password mismatch!"
                })
            }

        })

    }
}