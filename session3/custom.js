const getCustomers = () =>{
    let customers = JSON.parse(localStorage.getItem('customers')) || []
    return customers
}
const saveCustomers = (customers) =>{
    localStorage.setItem('customers', JSON.stringify(customers))
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
}

const showAllCustomers =()=>{
    customers = getCustomers()
    customers.forEach(c => {
        console.log(`accNum: ${c.accNum} and name: ${c.customerName} and balance: ${c.customerBalance}`)        
    });
}

const getSingleCustomerIndex =(accNum)=>{
    customers = getCustomers()
    findedCustomer = customers.findIndex(c => c.accNum==accNum)
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
















