const mongoose = require('mongoose')
const postScheme = new mongoose.Schema({
    user_id: { 
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    postType:{type:String, enum:['txt','img','vid'], required:true},
    content:{ type:String, trim:true, default:null},
    image:{ type:String, trim:true, default:null},
    video:{ type:String, trim:true, default:null},
    numOfLikes:{ type:Number, default:0},
    comments:[
        {
            details:{type: String},
            friendId:{type: mongoose.Schema.Types.ObjectId}
        }
    ]
},
{timestamps:true})

const Post = mongoose.model('Post',postScheme)
module.exports = Post