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
        title:{ type:"string", demandOption:true, describe:"task title"},
        content:{ type:"string", demandOption:false, describe:"task content"}
    },
    handler: function(argv){
        task = {title: argv.title, content:argv.content}
        myFunctions.addNewTask(task)
    }
})

yargs.parse()