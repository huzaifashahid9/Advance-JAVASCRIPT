//ES5 METHOD    
const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]
const arr3 = arr1.concat(arr2)
console.log(arr3)



//ES6 METHOD
const arr4 = [...arr1,...arr2]
console.log(arr4)



const obj1 ={
    first : "Huzaifa"
}


const obj2 ={
    Last : "Shahid"
}

const obj3 = {...obj1,...obj2}

console.log(obj3)