const express = require('express');

const router = express.Router();

require('../db/conn')
const User = require("../model/userSchema")



router.get('/', function (req, res) {
    res.send('Hello home from router ')
    console.log('hello about')
  })


router.post('/registration', function (req, res) {

    const {name,email,phone,work,password,cpassword} = req.body;

    // console.log(name,email,phone,work,password,cpassword)

    // console.log(req.body.name)
    // console.log(req.body.email)

    // res.json({message:req.body})
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: " please filled the all field properly "})
    }

    User.findOne({email:email})
    .then((userExist)=>{
        if (userExist){
            return res.status(422).json({error: " User already Exist "});
        }
     
        // const user = new User(req.body)  etate sob kichu ak sathe dukbe

        //nicher tate sob kichu fillup na korle o hobe
        const user = new User({name:name ,email,phone,work,password,cpassword});

        user.save().then(()=>{
            res.status(201).json({error: " User Register successful "})
        }).catch((err)=> res.status(500).json({error: " Failed Register "}))

    }).catch(err => {console.log(err)})



})

// {
//     "name":"Gourab",
//     "email":"a@gmail.com",
//     "phone":1234567891,
//     "work":"web dev",
//     "password":"password",
//     "cpassword":"password"

// }
module.exports = router;