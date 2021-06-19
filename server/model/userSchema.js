

const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
  messages:[{
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
  }],

    tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
    ] 


})



userSchema.pre('save', async function(next){
 
    if(this.isModified('password')){
        console.log("Password-hash");
        this.password  = await bcrypt.hash(this.password ,12);
        this.cpassword = await bcrypt.hash(this.cpassword ,12);
    }
    next();

} )

// we are generate token
userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens= this.tokens.concat({token:token}); // porer token ta uporer tar sathe match hobe
        await this.save();
        return token;

    }catch(err){
        console.error(err)
    }
}



//store the message
userSchema.methods.addMessage = async function(name, email, phone, message){
    try{
      this.messages =  this.messages.concat({name, email, phone, message})
      await this.save();
    //   console.log("success message send usershema")
      return this.messages;
      
    }catch(err){
        console.error(err)
    }
}


const User = mongoose.model('USER',userSchema)
module.exports = User;