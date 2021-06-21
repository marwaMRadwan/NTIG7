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
app.listen(process.env.PORT)

