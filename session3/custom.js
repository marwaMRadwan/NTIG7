const getCustomers = () =>{
    let customers = JSON.parse(localStorage.getItem('customers')) || []
    return customers
}
const saveCustomers = (customers) =>{
    localStorage.setItem('customers', JSON.stringify(customers))
}

const createMyElement = (parent, element, text = false) =>{
    myElement = document.createElement(element)
    parent.appendChild(myElement)
    if(text) myElement.textContent= text
    return myElement
}
drawCustomer = (i, newCustomer) =>{
    let tbody = document.querySelector('#customerData')     
    let tr = createMyElement(tbody, 'tr')
    createMyElement(tr, 'td', i)
    createMyElement(tr, 'td', newCustomer.accNum)
    createMyElement(tr, 'td', newCustomer.customerName)
    createMyElement(tr, 'td', newCustomer.customerBalance)
    td = createMyElement(tr, 'td' )
    delbtn = createMyElement(td, 'button', "delete")
    delbtn.addEventListener('click', function(e){
        deleteCustomer(newCustomer.accNum)
        // showAllCustomers()
        // let tableRows = document.querySelectorAll('#customerData tr')
        // console.log(tableRows[i-1], i-1)
        // tableRows[i-1].remove()
        tr.remove()
    })
}
const addNewCustomer = (name, balance) =>{
    let newCustomer = {
        accNum:parseInt(((new Date()).getTime())*Math.random()),
        customerName: name,
        customerBalance: balance
    }
    customers = getCustomers()
    customers.push(newCustomer)
    saveCustomers(customers)
    drawCustomer(customers.length, newCustomer)
    // let tbody = document.querySelector('#customerData')     
    // let tr = createMyElement(tbody, 'tr')
    // createMyElement(tr, 'td', customers.length)
    // createMyElement(tr, 'td', newCustomer.accNum)
    // createMyElement(tr, 'td', newCustomer.customerName)
    // createMyElement(tr, 'td', newCustomer.customerBalance)
}

const showAllCustomers =()=>{
    customers = getCustomers()
    let tbody = document.querySelector('#customerData')     
    // tbody.textContent=""
    customers.forEach((c, i) => {
        console.log(`accNum: ${c.accNum} and name: ${c.customerName} and balance: ${c.customerBalance}`)   
        // let tr = createMyElement(tbody, 'tr')
        // createMyElement(tr, 'td', i+1)
        // createMyElement(tr, 'td', c.accNum)
        // createMyElement(tr, 'td', c.customerName)
        // createMyElement(tr, 'td', c.customerBalance)
drawCustomer(i+1, c)
        // td = document.createElement('td')
        // td.textContent = c.customerBalance
        // tr.appendChild(td)

    });
}

const getSingleCustomerIndex =(accNum)=>{
    customers = getCustomers()
    findedCustomer = customers.findIndex( c => c.accNum==accNum )
/*
    [a,b,c]  c=='b'
    c => a  false
    c=> b   true  1
    */
    return findedCustomer
}
const editCustomer = (accNum, newName, newBalance) =>{
    findedCustomer = getSingleCustomerIndex(accNum)
    if(findedCustomer == -1 ) return console.log('customer not found')
    customers = getCustomers()
    customers[findedCustomer].customerName = newName
    customers[findedCustomer].customerBalance = newBalance
    saveCustomers(customers)
}

const editCustomerBalance = (accNum, amount, editType) =>{
    findedCustomer = getSingleCustomerIndex(accNum)
    if(findedCustomer == -1 ) return console.log('customer not found')
    customers = getCustomers()
    // edit Type =>>> 1 to add , 2 to withdraw
    if(editType==1) customers[findedCustomer].customerBalance+=amount
    else if(editType==2) {
        if(customers[findedCustomer].customerBalance<amount)
            return console.log('not available')
        customers[findedCustomer].customerBalance-=amount
    }
    else return console.log('please add type 1 or 0')
    saveCustomers(customers)
}

const deleteCustomer = (accNum) =>{
    findedCustomer = getSingleCustomerIndex(accNum)
    if(findedCustomer === -1 ) return console.log('customer not found')
    customers = getCustomers()
    customers.splice(findedCustomer,1)
    saveCustomers(customers)
}

// Array.findIndex( Element =>{
//     return Element=5
// })

// Array.findIndex( Element => Element=5)


// let today = new Date() 
// x = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// console.log(x)

const showHide= document.querySelector('#showHide')
const addForm = document.querySelector('#addForm form')

showHide.addEventListener('click', function(e){
    this.textContent=="show add form"? this.textContent = 'Hide add Form' : this.textContent="show add form";
    document.querySelector('#addForm').classList.toggle('d-none')
})

addForm.addEventListener('submit', function(e){
    e.preventDefault()
    addNewCustomer(this.elements.customerName.value, this.elements.customerBalance.value)
    this.reset()
    // showAllCustomers()
})
showAllCustomers()




























