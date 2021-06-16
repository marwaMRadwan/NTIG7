// const mongodb = require('mongodb')
// const mongoClient = mongodb.MongoClient
// const objectId = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const myMongoURL = 'mongodb://127.0.0.1:27017'
dbName = "g7"

MongoClient.connect(myMongoURL, {}, (error, client)=>{
    if(error) return console.log('db error')
    const myDB = client.db(dbName)
    // myDB.collection('test').findOne({_id:new ObjectID("60c9b1ab69474710e449ff7b")}, (err,res)=>{
    //     console.log(res)
    // })

    // myDB.collection('test').updateOne(
    //     { _id:new ObjectID("60c9b1ab69474710e449ff7b")},
    //     { $set:{ b:20 } }
    // ).then(res=>console.log(res.modifiedCount))
    // .catch(err=>{console.log(err)})


    // myDB.collection('test').updateOne(
    //     { _id:new ObjectID("60c9b1ab69474710e449ff7b")},
    //     { $rename:{ b: "x"} }
    // ).then(res=>console.log(res.modifiedCount))
    // .catch(err=>{console.log(err)})

    myDB.collection('test').deleteOne(
        { _id:new ObjectID("60c9b1ab69474710e449ff7b")},
    ).then(res=>console.log(res.deletedCount))
    .catch(err=>{console.log(err)})

    // myDB.collection('test').insertOne({a:15})
    // myDB.collection('test').insert({x:10})
    // myDB.collection('test').insertMany(
    //     [ {a:1}, {c:12}, {m:"kjj"} ]
    // )

    // myDB.collection('test').insert({a:"test"},
    // (err, res)=>{
    //     if(err) return console.log('fe error')
    //     console.log(res.insertedIds['0'])
    // }
    // )
    // myDB.collection('test').find().toArray((err, res)=>{
    //     console.log(res)
    // })
    // myDB.collection('test').find({a:1}).toArray((err,res)=>{
    //     console.log(res)
    // })
    // myDB.collection('test').findOne({a:1}, (err,res)=>{
    //     console.log(res)
    // })

})

// const d = new objectId("60c9b1ab69474710e449ff7b")
// console.log(d)