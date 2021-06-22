const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');



require('../db/conn')
const User = require("../model/userSchema")



router.get('/', function (req, res) {
    res.send('Hello home from router ')
    console.log('hello about')
  })


  // async await style
router.post('/registration', async function (req, res) {

    const {name,email,phone,work,password,cpassword} = req.body;

    // console.log(name,email,phone,work,password,cpassword)

    //  console.log(req.body.name)
    //  console.log(req.body.email)

    // res.json({message:req.body})
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: " please filled the all field properly "})
    }

    // then catch 

    try{
        const userExist = await User.findOne({email:email})

        if (userExist){
            return res.status(422).json({error: " User already Exist "});
        }

        const user = new User({name:name ,email,phone,work,password,cpassword});


        const userRegister = await user.save();

        res.status(201).json({message : " User Register successful "})
    
    }catch(err){
        console.log(err)

    }

})

/*
using promise---------------------------->>>>>>>>>>>>>>>>>>>>>>>

router.post('/registration',  function (req, res) {

    const {name,email,phone,work,password,cpassword} = req.body;

    // console.log(name,email,phone,work,password,cpassword)

    // console.log(req.body.name)
    // console.log(req.body.email)

    // res.json({message:req.body})
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: " please filled the all field properly "})
    }

    then catch 

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
*/

// login route

router.post('/login', async (req, res) =>{

    // console.log(req.body)
    // res.json({message : "hello login"})

    try{

        const {email,password} = req.body;
        if(!email || !password ){
            return res.status(422).json({error: " please filled the all field properly "})
        }

        const userlogin = await User.findOne({email:email});

        // console.log(userlogin)-> ans
        // {
        //     _id: 60ad3d1d4e85310d5c9ef3b4,
        //     name: 'Gourab',
        //     email: 'a@gmail.com',
        //     phone: 1234567891,
        //     work: 'web dev',
        //     password: 'password',
        //     cpassword: 'password',
        //     __v: 0
        //   }

        

        if(userlogin){
            
            const isMatch = await bcrypt.compare(password,userlogin.password)
            
            if(isMatch){
                res.status(201).json({message: " User login Successfully "})
                console.log("okk")
            }else{
                res.status(401).json({ error : " User error "});
                console.log("error")
            }

        }else{
            res.status(201).json({message: " Invalid Candidate "})
        }

        

        // postman
        // {
        //     "email":"a@gmail.com",
        //     "password":"password"
        // }

    }catch(err){
        console.log(err)
    }
})
module.exports = router;