const fs = require('fs')
readData=()=>{
    let data
    try { 
        data = JSON.parse(fs.readFileSync('data.json').toString())
        // if(data.length){}
    }
    catch(e) { data = [] }
    return data
}

writeData=(data)=>{
    fs.writeFileSync('data.json', JSON.stringify(data))
}

addData = (task) => {
    allData = readData()
    try{
        allData.push(task)
        writeData(allData)
        result = { helperStatus:true }
    }
    catch(e){
        result = { helperStatus:false, errMsg: e.message }
    }
    return result
}

module.exports = { addData, readData, writeData}