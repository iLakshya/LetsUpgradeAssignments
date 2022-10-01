// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log("server is running");
// });

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
mongoose.connect(
    "your mongoDB atlas database connection",
    {   useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true})
.then(()=>{
    app.listen(PORT, ()=> console.log("server is running"))
})
.catch(err=>{
    console.log(err);
})

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 6}
});

module.exports = mongoose.model("User", userSchema);

const {validationResult} = required("express-validator");
const User = required("../module/user");
const bcrypt = required("bcrypt.js");
const jwt = required("jsonwebtoken");

const register = async(req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        return res.status(400).json("check your date");
    }
    const {name,email,password} = req.body;
    let exisitngUser = await User.findOne({email: email});
    if(extinguisher)
    {
        return res.status(400).json("user exist");
    }
    let hashedPassword = await bcrypt.hash(password, 12);
    const createdUser = new User({
        name,
        email,
        password: hashedPassword
    });
    try {await createdUser.save()} catch (err) {}
    let token;
    token = jwt.sign(
        {userId: createdUser.id, email: createdUser.email},
        "supersecretkey",
        {expiresIn: "1h"});
        res.status(201).json({token: token, userId: createdUser.id});
}

const login = async(req,res) => {
    const {email,password} = req.body;
    let exisitngUser;
    try
    {
        exisitngUser = await User.findOne({email: email});
    }
    catch (err) {}
    if(!exisitngUser)
    {
        return res.status(200).json("Invalid credentials, could not log you in");
    }
    let isValidPassword = await bcrypt.compare(password, exisitngUser.password);
    if(!isValidPassword)
    {
        return res.status(400).json("Invalid credentials, could not log you in.");
    }
    let token;
    token = jwt.sign(
        {userId: exisitngUser.id, email: exisitngUser.email},
        "supersecretkey",
        {expiresIn: "1h"}
    );
    res.status(200).json({token: token, userId: exisitngUser.id});
}
exports.register = register;
exports.login = login;

const {check} = require('express-validator');
const usersController = require('../controllers/user-controller');
const express = require('express');
const router = express.Router();

router.post('/register',
  [ check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 })],
usersController.register);

router.post('/login',
  [ check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 })],
usersController.login);

module.exports = router;

const express = require('express');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/user-routes');
const bodyParser = require('body-parser');
const app1 = express();
app1.use(bodyParser.json());
app1.use('/api/users', usersRoutes);
const PORT1 = process.env.PORT1 || 5000;
mongoose.connect(
    "your mongoDB atlas databse url connection",
    {   useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true})
.then(()=>
app.listen(PORT, () =>console.log('server is running')));