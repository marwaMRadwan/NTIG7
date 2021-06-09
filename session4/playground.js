//clousers
// const myClouser = () =>{
//     return{
//         hello(){console.log('hello')},
//         bye(){console.log('bye')},
//         goodEvening(){console.log('good evening')}
//     }
// }
// console.log(myClouser().hello())
// const myClouser  = (val) =>{
//     return {
//         val,
//         vale(){return val},
//         add(x){return val+=x},
//         sub(x) {return  val-=x}
//     }
// }
// const myClouser1  = function(val) {
//     return {
//         val,
//         vale(){return this.val},
//         add(x){return this.val+=x},
//         sub(x) {return  this.val-=x}
//     }
// }
// let myVal = myClouser1(5)
// console.log(myVal.sub(6))
// console.log(myVal.vale())
// console.log(myVal.add(50))
// console.log(myVal.val)

//callback

// setTimeout(()=> { console.log('hi') } , 2000)
//  const myCB = (num ,cb )=>{
//     if(num<5) cb('done', false)  //=> (res, error) 
//     else cb(false, 'fe error')
//  }

//  myCB(4, (data, err)=>{
//           if(!err) console.log(data)
//           else console.log(err)
//  })
/* number => odd even  even only */

// const testNumber = (num, myReturn) =>{  //err=>false, "err"  data=>"tmam", false
//     if(num%2==0) myReturn(false, "tamam") // return {err:false, data:"tmam"}
//     else myReturn('Err', false)
// }
//('err', false)  (false, 'tmam')
// testNumber(9, (e,d)=>{
//     if(e) console.log(e)
//     else console.log(d);
// })

//promises
// setTimeout(()=>console.log('a'), 2000)
// setTimeout(()=>{console.log('b')}, 2000)
// console.log('c')
// const myPromise = (num) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             typeof num=="number"? resolve('done'): reject('error in data')
//         },2000)
//     })
// }
// try{
    // myAsyncFun()
// }
// catch(e){
// console.log(e.message)
// }
//async await
// x= await myPromise(5)
// console.log(x)
// const myAsyncFun = async()=>{
//     try{
//         x=await(myPromise("hello"))
//         console.log(x)
    
//     }
//     catch(e){
// console.log(e)
//     }
// }
// myAsyncFun()

//data=[1,2,3,4,5]  invalid credin
// const myCred = (userName)=>{
//     let p = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(userName=="marwa"|| userName=="mohammed"){
//                 resolve([1,2,3,4,5])
//             }
//             else {
//                 reject('unauthorized')
//             }
//         }, 1500)
//     })
//     return p
// }
// handelData = async()=>{
//     try{
//         d = await myCred('marwa')
/*
d=await myCre(0)
x= await myCre()
z= await myCred()
 */
//         console.log(d)
//     }
//     catch(e){
//         console.log(e)
//     }
// }
// handelData()
//then catch
// myCred('ahmed').then(
//     (res)=>{
//         console.log(res)
//     }
// ).catch(
//     (e)=>console.log(e)
// )
//apiCall



const getData = async(callback) =>{
    try{
    let x = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=50')
    let y = await(x.json())
    // console.log(y)   
    // return y
    callback(y, false)
    }
    catch(e){
        callback(false, e)
    }
}
// let myData = getData()
// console.log(myData)

getData( (data, error)=> {
    if(data)console.log(data)
    else console.log(error)
})








