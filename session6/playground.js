//filter find findIndex forEach
arr = [1,2,3,4,5, 2]
x = arr.findIndex((a, ind)=>{
    console.log(a, ind)
    return a==2
})
x = arr.find((a, ind)=>{
    console.log(a, ind)
    return a==2
})
x = arr.filter((a, ind)=>{
    console.log(a, ind)
    return a>2
})
// arr.forEach(element => {
//     if(element==2) break;
// });
console.log(x)