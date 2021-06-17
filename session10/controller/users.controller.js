const dbConnection = require('../db/db')
const {ObjectID}=require('mongodb')
//register view form
addNewUserView = (req, res)=>{
    res.render('users/add')
}
//register login
addNewUserPOST = (req,res)=>{
    data = req.body
    dbConnection(db => {
        if(!db) return console.log('database error')
        db.collection('user').insertOne(data, (e, result)=>{})
    })
    res.redirect('/')
}
login = (req,res)=>{
if(req.session.user) res.send('y')
else{
    res.render('users/login')

}
}
loginPost = (req,res)=>{
req.session.user = 5
// res.redirect('/')
res.send({s:req.session.user})
}
module.exports={
    addNewUserView,
    addNewUserPOST,
    login,
    loginPost
}