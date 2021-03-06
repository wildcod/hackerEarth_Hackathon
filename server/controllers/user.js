const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const signUp = (req, res, next) => {
    const { name , email, password } = req.body
    bcrypt.hash(password, 10, function(err, hash) {
        if(err){
            return res.status(500).json({
                error : err
            })
        }else {
            const user = new User({
                name : name,
                email : email,
                password : hash                     // storing password in hash format
            });
            user.save()
                .then(result => {
                    console.log(result);
                    res.status(200).json({
                        message : "User is created"
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        error : err
                    })
                })
        }

    })
};

const getTasks = (req, res, next) => {
    const page = parseInt(req.params.page)  //pagination
    const perPage = 5;
    User.find()
        .populate({
            path: 'tasks',
            options: {
                skip: perPage * page,
                limit: perPage,
            }
        })
        .exec()
        .then(users => {
            const count = users.length
            res.status(200).json({
                count,
                users
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
}

const login = (req, res, next) => {
    User.find({ email : req.body.email})
        .exec()
        .then(user => {
            if(user.length < 1){
                return res.status(401).json({
                    message : 'User Not Exist'
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err,result) => {
                if(err){
                    return res.status(401).json({
                        message : 'Password not matched'
                    })
                }
                if(result){
                    const token = jwt.sign(
                        {
                            email : req.body.email,
                            userId : user[0]._id
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn : '1h'
                        }
                    );
                    return res.status(200).json({
                        message : 'Auth Successful',
                        token,
                        email : user[0].email,
                        name : user[0].name,
                    })
                }
                res.status(401).json({
                    message : 'Auth Failed'
                })
            })

        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
}

module.exports = {
    signUp,
    getTasks,
    login
}