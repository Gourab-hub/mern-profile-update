


const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose');
dotenv.config({path:'./config.env'})

const app = express()

require('./db/conn');
const User= require('./model/userSchema')
const PORT = process.env.PORT


app.use(express.json());

// link the router file
app.use(require('./router/auth'))



//middleware add new


const middleware=(req,res,next)=>{
    console.log("hello Middleware")
    next()
}


app.get('/', function (req, res) {
  res.send('Hello home from server')
  console.log('hello about')
})

// fat arrow function
app.get('/about', middleware, (req, res) =>{
    res.send('Hello about')
    console.log('hello about')
});

//vrW9dVXUn8FUSlKi

//mongodb+srv://dbUser:<password>@cluster0.9oty7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


app.get('/contact', function (req, res) {
    res.send('Hello contact')
})

/*
app.get('/signup', function (req, res) {
    res.send('Hello signup')
})


app.get('/registration', function (req, res) {
    res.send('Hello registration')
})*/

app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON PORT NO ${PORT}`)
})

