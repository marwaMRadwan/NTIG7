taskHelper = require('../helpers/myfunction.helper')


const addTask = (req, res)=>{
    let data = {
        pageTitle: 'add Task',
        errors :[],
        errorStatus:false
    }
    if(Object.keys(req.query).length != 0){
        if(req.query.title == '') data.errors.push('invalid title')
        if(req.query.content == '') data.errors.push('invalid content')
        if(data.errors.length == 0) {
            myInsertedData = req.query
            myInsertedData.status == 'on'?myInsertedData.status=true : myInsertedData.status=false;
            myInsertedData.id = Date.now()
            result = taskHelper.addData(myInsertedData)
            if(!result.helperStatus) {
                data.errors.push("cann't add to json file")
                // data.errorStatus=true
            }
//             else{
// res.redirect('/')
//             }
        }
        if(data.errors.length ==0)  res.redirect('/')
        data.errorStatus=true

    }
    res.render('add', data) // res.render('add', {name:'marwa',age:36})
}


const showAll = (req, res)=>{
    allTasks = taskHelper.readData()
    data = {
        pageTitle: 'all Tasks',
        tasks: allTasks,
        tasksLen: (allTasks.length==0?true:false)
    }
    res.render('all', data)
}

const showSingle = (req, res)=>{
    let data = {
        pageTitle: 'single Task',
        status: true
    }
    const id = req.params.id
    const allTasks = taskHelper.readData()
    let record = allTasks.find(task=> task.id == id )
    if(!record) data.status=false
    else data.myData=record
    res.render('single', data)
}
const deleteTask = (req, res)=>{
    const id = req.params.id
    const allTasks = taskHelper.readData()
    let record = allTasks.findIndex(task=> task.id == id )
    if(record!=-1) {
        allTasks.splice(record,1)
        taskHelper.writeData(allTasks)
    }

    res.redirect('/')
}
const editTask = (req, res)=>{
    id = req.params.id
    data = {
        pageTitle: 'edit Task'
    }
    res.render('edit', data)
}
module.exports={ addTask, editTask, showAll, showSingle, deleteTask }