// console.log('hello')
// const myTest = require('./myMod')
// console.log(myTest)
// myTest.test()
// const fs = require('fs')
// writeFileSync - readFileSync - appendFileSync
// fs1.writeFileSync('text.txt', 'hi')
// allData = [
//     {nama:"a", age:10},
//     {nama:"b", age:11},
//     {nama:"c", age:12}
// ]
// fs.writeFileSync('data.json', JSON.stringify(allData))
//npm
// console.log(JSON.parse(fs.readFileSync('data.json').toString()))
// const validator = require('validator')
// console.log(validator.isMobilePhone('0508821826',['ar-EG']))

//npm init --y
// console.log(process.argv)
// name = process.argv[2]
// console.log(name)


//yargs
// const yargs = require('yargs')
// // yargs.version('1.0.1')
// yargs.command({
//     describe:"",
//     command : 'a',
//     builder:{
//         user:{type:'string', demandOption:true},
//         age:{type:'number', default:5}
//     },
//     handler: function(argv){

//         console.log(`hello from yargs ${argv.user} - ${argv.age}`)
//     }
// })
// console.log(yargs.argv)


