//request
const request = require('request')
const url = `https://jsonplaceholder.typicode.com/posts?_limit=10`

const taskApi = (callBack) => {
    // try{
        request( { url , json:true} , (error, data)=>{
            if(error) callBack(error, false)
            else callBack(false, data.body)
        })
    
    // }
    // catch(e){
    //     callBack(e, false)
    // }
}
// console.log(taskApi())
// taskApi((err,res)=>{
//     if(err) console.log(err)
//     else console.log(res)
// })
//http https
const https = require('https')
const httpsGetData = (callback) =>{
    const req = https.request(url, (response)=>{
        let data = ''   
        response.on('data', (s)=>{
            // console.log('c=> ', chunk)
            data+=s.toString()
            // console.log(data)
        }) 
        response.on('end', () =>{
            const body = JSON.parse(data)
            console.log(body)
            callback(false,body)
        })
    })
    req.on('error', ()=>callback('error', false))
    req.end()
    
}

// httpsGetData((err,c)=>{
//     if(err) console.log(err)
//     else console.log(c)
// })
module.exports = {
    taskApi,
    httpsGetData
}
