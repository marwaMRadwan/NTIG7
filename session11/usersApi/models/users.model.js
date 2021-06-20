const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    userName:{
        type:String,
        trim:true,
        lowercase:true,
        unique:[true, 'used before'],
        required:[true, 'name is required']
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        required:true,
        validate(value){
            if(!validator.isEmail) throw new Error('invalid email')
        }
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
    gender:{
        type:String,
        trim:true,
        enum:['male', 'female']
    },
    status:{
        type:Boolean,
        default:false
    },
    grades:[
        {
            subject:{ type:String},
            grade:{type:Number}
        }
    ]
})
module.exports=User