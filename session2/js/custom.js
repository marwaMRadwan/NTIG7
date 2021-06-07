/*
getElementById => single data
getElementByClassName=> array
tag

querySelector => . # p 
querySelectorAll 
*/
// const paragraph = document.querySelector('p')

// const paragraph = document.querySelectorAll('p')
// console.log(paragraph)
// paragraph.textContent = "<h1>hello from js DOM</h1>"
// paragraph.innerHTML = "<h1>hello from js DOM</h1>"
// paragraph.innerText = "<h1>hello from js DOM</h1>"

// const myHeading = document.createElement('h1')
// myHeading.textContent="hi there"
// document.querySelector('body').appendChild(myHeading)
// test = function(){
//     console.log('hello')
// }

// document.querySelector('#btn1').addEventListener('click', function(e){
//     // console.log(e.target)
//     // console.log(this)
//     this.textContent="new text"
// })
/*
table  =>done
thead => tr => td*4
tbody =>(tr*4) *5
 */


// createCustomElement('body', 'div', '',[], '')

// const posts = [
//     {
//     userId: 1,
//     id: 1,
//     title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//     userId: 1,
//     id: 2,
//     title: "qui est esse",
//     body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//     userId: 1,
//     id: 3,
//     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
//     },
//     {
//     userId: 1,
//     id: 4,
//     title: "eum et est occaecati",
//     body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
//     },
//     {
//     userId: 1,
//     id: 5,
//     title: "nesciunt quas odio",
//     body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
//     }
//     ]

// const table = document.createElement('table')
// document.querySelector('#tableContent').appendChild(table)
// table.classList.add('table' ,'table-stripped')
// const thead = document.createElement('thead')
// table.appendChild(thead)
// const tbody = document.createElement('tbody')
// table.appendChild(tbody)

// let tr = document.createElement('tr')
// thead.appendChild(tr)

// let td = document.createElement('td')
// td.textContent="userId"
// tr.appendChild(td)

// td = document.createElement('td')
// td.textContent="id"
// tr.appendChild(td)
// td = document.createElement('td')
// td.textContent="title"
// tr.appendChild(td)
// td = document.createElement('td')
// td.textContent="body"
// tr.appendChild(td)

// posts.forEach(post=>{
//     tr = document.createElement('tr')
// tbody.appendChild(tr)

//     td = document.createElement('td')
// td.textContent=post.userId
// tr.appendChild(td)

// td = document.createElement('td')
// td.textContent=post.id
// tr.appendChild(td)
// td = document.createElement('td')
// td.textContent=post.title
// tr.appendChild(td)
// td = document.createElement('td')
// td.textContent=post.body
// tr.appendChild(td)

// })

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
const posts = JSON.parse(localStorage.getItem('posts'))||[]
const parent = document.querySelector('#tableContent')
const newTable = createCustomElement(parent, 'table', 'table table-stripped', [], '')
const newTableHead = createCustomElement(newTable, 'thead', '', [], '')
const newTableBody = createCustomElement(newTable, 'tbody', '', [], '')
let tr = createCustomElement(newTableHead, 'tr', '', [], '')
const heads = ['userId', 'id', 'title', 'body']
heads.forEach( h => th = createCustomElement(tr, 'th','', [], h))
if(posts.length == 0){
    tr= createCustomElement(newTableBody, 'tr', '', [], '')
     th = createCustomElement(tr, 'td','', [{attrName:'colspan',attValue:'4'}], 'no data to show')

}
else{
    posts.forEach(post=>{
        tr= createCustomElement(newTableBody, 'tr', '', [], '')
        heads.forEach( h => th = createCustomElement(tr, 'td','', [], post[h]))
    })
    
}


document.querySelector('#addPost').addEventListener('submit', function(e){
    e.preventDefault()
    let newPost = {}
    heads.forEach(h=> newPost[h] = this.elements[h].value )
    posts.push(newPost)
    localStorage.setItem('posts',JSON.stringify(posts))
    tr= createCustomElement(newTableBody, 'tr', '', [], '')
    heads.forEach( h => th = createCustomElement(tr, 'td','', [], newPost[h]))
    this.reset()
})
















