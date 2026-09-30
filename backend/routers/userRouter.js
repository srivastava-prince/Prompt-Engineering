const express = require('express');
const Model = require("../models/UserModel");
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
require('dotenv').config();

const router = express.Router();
router.post('/add', (req, res) => {
    // res.send('resonse from user add');

    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            res.status(500).json(err);
        });
});
router.get('/getbycity/:city', (req, res) => {
    const { city } = req.params;
    Model.find({ city: req.params.city })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});
router.get('/getbyemail/:email', (req, res) => {
    const { email } = req.params;
    Model.findOne({ email: req.params.email })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});
router.put('/update/:id', (req, res) => {

    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});

router.get('/getbyid/:id', (req, res) => {
    const { id } = req.params;
    Model.findById(id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});

router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    Model.findByIdAndDelete(id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});

router.post('/authenticate', (req, res) => {
    const { email, password } = req.body;
    Model.findOne({ email, password })
        .then((result) => {
            if (result) {
                //email & Password matches
                //Create Token Here 
                const { _id, name } = result;

                jwt.sign(
                    { _id, name },
                    process.env.JWT_SECRET,
                    { expiresIn: '1h' },
                    (err, token) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json(err);

                        } else {
                            res.status(200).json({ token });

                        }

                    }

                )

            }
            else {
                //Email & Password Doesn't match
                res.status(403).json({ message: 'Invaild Credentaials' });
            }

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });



});


module.exports = router;
