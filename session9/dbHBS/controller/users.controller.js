const dbConnection = require('../db/db')
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
    addNewUserPOST
}