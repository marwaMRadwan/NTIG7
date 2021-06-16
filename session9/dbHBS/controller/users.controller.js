const dbConnection = require('../db/db')
const {ObjectID}=require('mongodb')
showAll = (req,res)=>{
    dbConnection(db=>{
        if(!db) return console.log('error')
        db.collection('user').find().toArray((err, users)=>{
            if(err)console.log(err)
            else {
                console.log(users)
                res.render('all', {users})
            }
        })
    })
}

showSingle = (req,res) =>{
    let id = req.params.id
    dbConnection(db=>{
        db.collection('user').findOne({_id:new ObjectID(id)}, (err, user)=>{
            res.render('single', {user})
        })
    })
}

deleteUser = (req,res) =>{
    let id = req.params.id
    dbConnection(db=>{
        db.collection('user').deleteOne({_id:new ObjectID(id)})
        .then(data=>{res.redirect('/')})
        .catch(e=>{})
    })
}


addNewUserView = (req, res)=>{
    res.render('add')
}
addNewUserPOST = (req,res)=>{
    data = req.body
    dbConnection(db => {
        if(!db) return console.log('database error')
        db.collection('user').insertOne(data, (e, result)=>{
            if(e) console.log(e)
            else console.log(result)
        })
    })
    res.redirect('/')
}
module.exports={
    addNewUserView,
    addNewUserPOST,
    showAll,
    showSingle,
    deleteUser
}