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

const testNumber = (num, myReturn) =>{  //err=>false, "err"  data=>"tmam", false
    if(num%2==0) myReturn(false, "tamam") // return {err:false, data:"tmam"}
    else myReturn('Err', false)
}

testNumber(9, (e,d)=>{
    if(e) console.log(e)
    else console.log(d);
})
//promises

//async await

//then catch

//apiCall