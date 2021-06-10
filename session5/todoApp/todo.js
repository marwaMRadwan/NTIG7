/*
fs =>store data inside json file
add task
show all tasks
show single task
edit task
delete task
*/

const myFunctions = require('./myMethods')
const yargs = require('yargs')

yargs.command({
    command:"addTask",
    describe: "add New Task to tasks file",
    builder:{
        title:{ type:"string", demandOption:true, describe:"task title", unique:true},
        content:{ type:"string", demandOption:false, describe:"task content"}
    },
    handler: function(argv){
        task = {title: argv.title, content:argv.content}
        myFunctions.addNewTask(task)
    }
})

yargs.command({
    command:"showAll",
    describe: "show all Tasks from tasks file",
    handler: function(){
        myFunctions.showAllData()
    }
})

yargs.command({
    command:"showSingle",
    describe: "add New Task to tasks file",
    builder:{
        title:{ type:"string", demandOption:true, describe:"task title", unique:true}
    },
    handler: function(argv){
        myFunctions.showSingleTask(argv.title)
    }
})
yargs.command({
    command:"delete",
    describe: "add New Task to tasks file",
    builder:{
        title:{ type:"string", demandOption:true, describe:"task title", unique:true}
    },
    handler: function(argv){
        myFunctions.deleteTask(argv.title)
    }
})

yargs.command({
    command:"editTask",
    describe: "add New Task to tasks file",
    builder:{
        title:{ type:"string", demandOption:true, describe:"task title", unique:true},
        newTitle:{ type:"string", describe:"task title"},
        newContent:{ type:"string", demandOption:false, describe:"task content"}
    },
    handler: function(argv){
        task = {title: argv.newTitle, content:argv.newContent}
        myFunctions.editTask(argv.title,task)
    }
})
yargs.parse()



// obj= {
//     name:"marwa",
//     age:36,
//     job:"developer"
// }
//keys = Object.keys(obj) //[name, ....]
// for(k in obj){
//     console.log(k, '- ', obj[k])
// }

// a1 = [{id:1},{id:2},{id:3}]
// a2 = [{id:6},{id:7},2]
// a3 = [1,8,9]
// id, name, 7age

// x =[
//     {a:1, b:2, c:3},
//     {a:1, b:2, c:3},
//     {a:1, b:2, c:3}
// ]


// y =[
//     {e:1, d:2, r:3},
//     {e:1, d:2, r:3},
//     {e:1, d:2, r:3}
// ]

// x.forEach((element,i) => {
//     console.log(element['a'], '-' ,element['b'],' - ',y[i]['r'])
//     // console.log(element)
// });

// a1 [1, 'm', 'h']
// a2 [2, 'x', 'i']
// a3 [5, 'h','e']

// if(a1[1]==a2[1]||a1[1]==a3[1]||a2[1]==a3[1]){}
// a=[1,2,5]   
// b=[5,3,1]
// let x= () =>{
//     flag = true
// a.forEach(function(el){
//     b.forEach(function(el1){if(el==el1) flag=false})
// })
// return flag
// }
// console.log(x())
// 12 Element
// 3 groups
// [a,b], [c,d]
// [else,r][q,w]
// [sessionStorage,z][parse,o]


// a+b   c+d
//       d+e
//       e+f
//       f+g


let x ="b3bcc5a59541bb=F5581/09+53c2"
console.log(x.length)
