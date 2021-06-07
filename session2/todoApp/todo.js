const taskHeads = ["id", "title", "content", "taskType", "dueDate", "status", "important"]

const getAllData = () => JSON.parse(localStorage.getItem('tasks')) || []

const setAllData = (tasks) =>localStorage.setItem('tasks', JSON.stringify(tasks))

const createCustomElement = (parent, element, classes , attributes, text) => {
    const myElement = document.createElement(element)
    parent.appendChild(myElement)
    if(classes != '') myElement.className = classes
    if(text != '') myElement.textContent = text
    if(attributes.length != 0){    
        attributes.forEach(attribute=>{
            myElement.setAttribute(attribute.attrName, attribute.attValue)
        })
    }
    return myElement
}

const addTask = (task) =>{
    tasks = getAllData()
    tasks.push(task)
    setAllData(tasks)
}

let tasks = getAllData()

document.querySelector('#addTask').addEventListener('submit', function(e){
    e.preventDefault()
    task = {    
        id: tasks.length+1
    }
    taskHeads.forEach((h,i) => {
        if(i!=0 && h!="status") task[h] = e.target.elements[h].value
        else if(h=="status") task[h] = e.target.elements[h].checked
    })
    addTask(task)
})




