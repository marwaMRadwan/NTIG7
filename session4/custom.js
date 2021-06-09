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
const showHide= document.querySelector('#showHide')
const addForm = document.querySelector('#addForm form')

showHide.addEventListener('click', function(e){
    this.textContent=="show add form"? this.textContent = 'Hide add Form' : this.textContent="show add form";
    document.querySelector('#addForm').classList.toggle('d-none')
})
t1 = 0
t2 = 1

drawCustomer = (i, newCustomer) =>{
    let tbody = document.querySelector('#customerData')     
    let tr = createMyElement(tbody, 'tr')
    tr.className = "myTr"
    createMyElement(tr, 'td', i)
    createMyElement(tr, 'td', newCustomer.accNum)
    tdCName = createMyElement(tr, 'td', newCustomer.customerName)
    tdCBalance = createMyElement(tr, 'td', newCustomer.customerBalance)
    td = createMyElement(tr, 'td' )
    delbtn = createMyElement(td, 'button', "delete")
    delbtn.className= "btn btn-danger"
    delbtn.addEventListener('click', function(e){
        deleteCustomer(newCustomer.accNum)
        tr.remove()
    })
    editbtn = createMyElement(td, 'button', 'edit')
    editbtn.className = "btn btn-success"
    editbtn.addEventListener('click', function(e){
        // document.querySelectorAll('.hidden').forEach(inp=> inp.remove())
        // document.querySelector('#addEditBtn').textContent = 'add'
        // editCustomer(newCustomer.accNum, 'b',10)
        // tdCBalance.textContent=10
        // tdCName.textContent="b"
        // inp =createMyElement(addForm, 'input', '')
        // inp.setAttribute('value', newCustomer.accNum)
        // inp.setAttribute('name', 'accNum')
        // inp.className="hidden"
        // inp = createMyElement(addForm, 'input', '')
        // inp.setAttribute('value', i)
        // inp.setAttribute('name', 'index')
        // inp.className="hidden"
        t1= newCustomer.accNum
        t2 = i
        showHide.textContent = 'Hide add Form'
        document.querySelector('#addForm').classList.remove('d-none')
        addForm.elements.customerName.value = newCustomer.customerName
        addForm.elements.customerBalance.value = newCustomer.customerBalance
        document.querySelector('#addEditBtn').textContent="edit"

    })
}
addForm.addEventListener('submit', function(e){
    e.preventDefault()
    if(document.querySelector('#addEditBtn').textContent == 'add'){
        addNewCustomer(this.elements.customerName.value, this.elements.customerBalance.value)
    }    
    else{
        console.log(this.elements)
        editCustomer(t1, this.elements.customerName.value, this.elements.customerBalance.value)
        // document.querySelector('tbody').innerText=""
        // showAllCustomers()
        // this.elements.index.value
        // console.log(document.querySelectorAll('.myTr')[this.elements.index.value-1])
        // mySelectedTr = document.querySelectorAll('.myTr')[this.elements.index.value-1]
        // x =mySelectedTr.children
        x = document.querySelectorAll('.myTr')[t2-1].querySelectorAll('td')
        x[2].textContent= this.elements.customerName.value
        x[3].textContent= this.elements.customerBalance.value
    // document.querySelectorAll('.hidden').forEach(inp=> inp.remove())
    //     document.querySelector('#addEditBtn').textContent = 'add'
    }
    this.reset()
})

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
}

const showAllCustomers =()=>{
    customers = getCustomers()
    let tbody = document.querySelector('#customerData')     
    customers.forEach((c, i) => {
    drawCustomer(i+1, c)
    });
}

const getSingleCustomerIndex =(accNum)=>{
    customers = getCustomers()
    findedCustomer = customers.findIndex( c => c.accNum==accNum )
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


showAllCustomers()
