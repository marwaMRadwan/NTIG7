const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/myNewG7', {})
//model 
//user => name, email, password, age
const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    age:{
        type:Number,
        default:30,
//        min:10,
        max:50,
        validate(value){
            if(value<10) throw new Error('age must be more than 10')
        }
    },
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email')
            }
        }
    },
    password:{
        type:String,
        minLength:6,
        maxLength:20,
        validate(value){
            if(value.includes('123')) throw new Error('invalid password')
        }
    }
})
const data = new User({
    name:36,
    email:"marwatechsexperts.com",
    password:"123456",
    age:27
})
data.save()
.then(
    ()=>console.log('data inserted')
)
.catch(
    (e)=>console.log(e)
)