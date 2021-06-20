//author, title, numberofpages
const mongoose = require('mongoose')

const Book = new mongoose.model('Book',{
    title:{
        type:String,
        trim:true,
        unique:true,
        minlength:5,
        maxlength:50,
        required:true
        //  match:/^\w+[A-Za-z]+$/
        // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    author:{
        type:String,
        trim:true,
        unique:true,
        minlength:5,
        maxlength:50
    },
    numOfPages:[
        {
            copyNum:{
                type:String,
                trim:true,
                required:true
            }, 
            numPages:{
                type:Number,
                min:100
            }
        }
    ]
})
module.exports= Book
// let x=new Book({
//     title:"nAnnd22sh"
// })

// x.save().then(()=>{console.log('done')}).catch(e=>console.log(e.message))