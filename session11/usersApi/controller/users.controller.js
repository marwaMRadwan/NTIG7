bookModel = require('../models/books.model')

addBook = async(req,res)=>{
    try{
        data = new bookModel(req.body)
        await data.save()
        res.status(200).send({
            apiStatus:true,
            data:data,
            message: 'data inserted successfuly'
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e,
            message: 'error inserting data'
        })
    }
}
module.exports={
    addBook,
}