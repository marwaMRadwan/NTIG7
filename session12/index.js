app=require('./src/app')

// app.get('/test', (req,res)=>{res.send('test')})


// const bcrypt = require('bcryptjs')
// let t = async()=>{
//     let x = await bcrypt.hash('123', 9)
//     let y = await bcrypt.hash('123', 9)

//     console.log(await bcrypt.compare('123', x))
//     console.log(y)
//     console.log(x)
// }
// t()

// const jwt = require('jsonwebtoken')
// let x = jwt.sign({_id:'1234'}, 'hello')
// console.log(x)
// let y = jwt.verify(x, 'hello')
// console.log(y)
app.listen(process.env.PORT)

