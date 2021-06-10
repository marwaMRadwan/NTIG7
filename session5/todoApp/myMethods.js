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

// [1,2,3,4]  1
addNewTask = (task) =>{
    data = getAllData()
    serchResult = data.findIndex(el=> el.title == task.title)
    if(serchResult!=-1) return console.log('title used before')
    data.push(task)
    saveTodos(data)
}
showAllData = () =>{
    data = getAllData()
    data.forEach(task=>{
        console.log(`title: ${task.title} - content: ${task.content}`)
    })
}
editTask = (title, newData) =>{
    data= getAllData()
    serchResult = data.findIndex(el=> el.title == title)
    if(serchResult==-1)  return console.log('not found')
    for(taskData in newData){      // {title:undifend,content:"a"}
        // console.log(newData[taskData]?'true':'false')
        if(newData[taskData]) {
            // console.log(`${taskData} => ${newData[taskData]}`)
            // console.log(data[serchResult][taskData])
            data[serchResult][taskData] = newData[taskData]
        }
    }
    saveTodos(data)
}
showSingleTask = (title) =>{
    data= getAllData()
    serchResult = data.findIndex(el=> el.title == title)
    if(serchResult==-1)  return console.log('not found')
    console.log(`title: ${data[serchResult].title} - content: ${data[serchResult].content}`)
}
deleteTask = (title) =>{
    data= getAllData()
    serchResult = data.findIndex(el=>{ 
        return el.title == title
    })
    if(serchResult==-1)  return console.log('not found')
    data.splice(serchResult, 1)
    saveTodos(data)
}
module.exports = {
    addNewTask,
    showAllData,
    editTask,
    showSingleTask,
    deleteTask
}



