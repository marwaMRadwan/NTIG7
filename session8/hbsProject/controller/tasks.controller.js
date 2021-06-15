taskHelper = require('../helpers/myfunction.helper')


const addTask = (req, res)=>{
    let data = {
        pageTitle: 'add Task',
        errors :[]
    }
    if(Object.keys(req.query).length != 0){
        if(req.query.title == '') data.errors.push('invalid title')
        if(req.query.content == '') data.errors.push('invalid content')
        if(data.errors.length == 0) result = taskHelper.addData(req.query)
        //res.send(data)
        if(!result.helperStatus) data.errors.push("cann't add to json file")
        // }
   res.send(data)     
    }

    // x = req.query
    // r = taskHelper.addData(x)
    // console.log(r)
    
    res.render('add', data)
}




const showAll = (req, res)=>{
    data = {
        pageTitle: 'all Tasks'
    }
    res.render('all', data)
}
const showSingle = (req, res)=>{
    id = req.params.id
    data = {
        pageTitle: 'single Task'
    }
    res.render('single', data)
}
const deleteTask = (req, res)=>{
    id = req.params.id
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