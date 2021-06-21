//id , email,  profile image, phone, userName,  friends
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    id:{ type:Number},
    fname:{ type:String, required:true, maxlength:20 },
    lname:{ type:String, required:true, maxlength:20 },
    accountStatus:{ type:Boolean, default:false },
    password:{ type:String, trim:true, required:true },
    birthdate: { type:Date }
    },
    { timestamps:true }
)

userSchema.pre('save', async function(next){
    try{
        user = this
        lastuser = await User.findOne().sort({_id:-1})
           if(!lastuser) user.id=1
           else user.id = lastuser.id+1
           if(user.isModified('password')){
               user.password = await bcrypt.hash(user.password, 12)
           }
           next()
    }
    catch(e){
        console.log(e.message)
    }
//    console.log(`save ${this}`)
})

const User = mongoose.model('User', userSchema)
module.exports = User