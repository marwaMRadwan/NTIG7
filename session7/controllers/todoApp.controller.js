const { all } = require('../src/app')

fs = require('fs')
readData = () => {
    try{
        data = JSON.parse(fs.readFileSync('tasks.json').toString())
    }
    catch(e){
        data = []
    }
    return data 
}

writeData = (data) =>{
    try{
        fs.writeFileSync('tasks.json', JSON.stringify(data))
    }
    catch(e){
        fs.writeFileSync('tasks.json', '[]')
    }
}
addTask = (task) =>{

    allData = readData()
    console.log(allData)
    allData.push(task)
    console.log(allData)
    writeData(allData)
}

addTaskController = ( req, res )=>{
    task = {
        name:'',
        content:''
    }
    // console.log(req.query)
    if(req.query.name == '' || req.query.content == ''){
        //res.redirect('/addTask')
        task = req.query
    }
    if(req.query.name&&req.query.content){
        addTask(req.query)
        res.redirect('/addTask')
    }
    res.render('contact', {pageTitle:'add new task', taskName:task.name, taskContent:task.content})
}
showAllTasksController = (req,res)=>{
    data = {
        pageTitle: 'Show All Tasks',
        data: readData()
    }
    res.render('allTasks', data)
}

showSingleTask = (req,res)=>{
    // console.log(req.params)
    allData = readData()
    // data =  allData[req.params.id]
    res.render('single',allData[req.params.id])
}
deleteSingleTask = (req,res)=>{
    
}
editSingleTask = (req,res)=>{
    
}
module.exports = {
    addTaskController,
    showAllTasksController,
    showSingleTask,
    deleteSingleTask,
    editSingleTask
}