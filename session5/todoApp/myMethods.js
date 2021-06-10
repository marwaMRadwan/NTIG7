const fs = require('fs')
const saveTodos = (data) =>{
    fs.writeFileSync('allData.json', JSON.stringify(data))
}

const getAllData = () =>{
    try{
    data = JSON.parse(fs.readFileSync('allData.json').toString())
    }
    catch(e){
        data=[]
    }
    return data
} 

addNewTask = (task) =>{
    data = getAllData()
    data.push(task)
    saveTodos(data)
}
showAllData = () =>{}
editTask = () =>{}
showSingleTask = () =>{}
deleteTask = () =>{}
module.exports = {
    addNewTask,
    showAllData,
    editTask,
    showSingleTask,
    deleteTask
}