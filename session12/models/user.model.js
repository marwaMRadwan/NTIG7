//   friends
const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    id:{ type:Number},
    fname:{ type:String, required:true, maxlength:20 },
    lname:{ type:String, required:true, maxlength:20 },
    accountStatus:{ type:Boolean, default:false },
    password:{ type:String, trim:true, required:true },
    birthdate: { type:Date },
    userName: { type:String },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('invalid email')
        }
    },
    userImage:{ type: String },
    phone:{ type:String},
    friends :[
        {
            friend_id:{ 
                type: mongoose.Schema.Types.ObjectId,
                unique:true
            }
        }
    ],
    tokens: [
        { token:{type:String}}
    ]
    },
    { timestamps:true }
)

userSchema.methods.toJSON = function(){
    let user = this.toObject()
    deleteItems = ['password']
    deleteItems.forEach(item =>{
        delete user[item]
    })
    return user
}
userSchema.pre('save', async function(next){
    try{
        user = this

        lastuser = await User.findOne().sort({_id:-1})
        if(!lastuser) user.id=1
        else user.id = lastuser.id+1

        if(!user.userName) user.userName = user.fname+user.lname

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
userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id.toString()}, process.env.JWTKEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token;
}

userSchema.statics.logMeOn = async(email,password)=>{
    const user = await User.findOne({email})
    if(!user) throw new Error('invalid email')
    const matchPass = await bcrypt.compare(password, user.password)
    if(!matchPass) throw new Error('invalid pass')
    return user
}

const User = mongoose.model('User', userSchema)
module.exports = User