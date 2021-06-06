// var x
// let y
// const z
// z=15
// var y = 5
// var y=10

// let x=10

// if(true){
//    let x = 5
// }

// console.log(x)
// let x=5
// x= "marwa"
// x="false"
// if(x){}
// x=[1,2,3]
// x={name:"marwa", age:36}

// x=5
// console.log(typeof x)
// i=0
// for( ; ; ){
//     i++
//     if(i>5) break
// }


// array.forEach(element => {
    
// });
// f1()
// function f1(){

// }

// const f2 = function(){

// }

// const f3 = () =>{

// }

// f1()
// f2()
// f3()


//filter, forEach,find, indexOf, sort, ..........
// a.forEach((element, i)=>{
//     a[i]+=2
//     console.log(element)
// })

// console.log(a)

// for(i=0; i<a.length; i++){
//     a[i]+=2
//     console.log(a[i])
// }
// console.log(a)

// let a = ["marwa", "nouran", "mazen", "omar"]

// let x = a.filter(ele =>{
//     return ele.includes("h")
// })
// console.log(x)
// a.forEach((ele, i)=>{
//     a[i]+=2
// })

// let heba = {
//     name: "heba",
//     age:22,
//     position: "frontEnd developer"
// }

// console.log(Object.keys(heba));

// keys = Object.keys(heba)
// keys.forEach(element => {
//     console.log(heba[element])
// });

/*
setUser('marwa', 36, 2000)

users = [
    {name:'marwa', age:36, sal:2000}
]

*/



/*
get data => name, age, salary
set data as user object
add user object to user array
*/

// "heloo" + n +"bvgb" 
// `hello ${bn} hgj`

// let functionName = (params) => {
//     //body
// }


// let users = []

// let validateNumber = function (key, value) {
//     while(isNaN(Number(value)) ){
//         value = prompt(`please enter valid data for ${key}`)
//     }
//     value = Number(value)
//     return value
// }
// let getUserData = function(){

//     let user = { name: null, age:null, salary:null, job:null, address:null }

//     userDetailsObj = Object.keys(user)

//     userDetailsObj.forEach(element => {

//         user[element] = prompt(`enter user ${element}: `)       
//         if (element=="salary"||element=='age') {
//            user[element] = validateNumber(element, user[element])
//         }

//     });

//     // console.log(user)

//     users.push(user)

// }

// getUserData()
// console.log(users)
// name = prompt('enter your name')
// age = prompt('enter your age')
// salary = prompt('enter your salary')
// user={}
// user.name = name
// user.age = age
// user.salary = salary
// users.push(user)
// console.log(users)

// Objects

// DOM

// JSON




//json
// jsonData = [
//     {
//         "name":"marwa",
//         "age":36
//     }
// ]

//object
// let user = {
//     name: "marwa",
//     birthYear: 1985,
//     address: "giza",
//     getUserData: function () {
//         console.log(`User name is ${this.name} and his age is ${2021-this.birthYear}`);        
//     }
// }

// user.getUserData()

// let test = function(x) {
//     return {
//         val: x,
//         mul: x*2
//     }
// }

// console.log(test(5))




// var x =[5]
// function z(x){x[0]=3}
// z(x)
// console.log(x)


let user = {
    balnce:1000
}

addBalance = function (user) {
    user.balnce+=500    
}

addBalance(user)
console.log(user)

/*
user=> name, balance, taxes
 add balance => balance => balnce++ , taxes = balance*10%
 display data =>print user data
 reset account=> balance, taxes =0
*/





