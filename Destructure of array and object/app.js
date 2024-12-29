const obj ={
    name : "Huzaifa",
    age : 18
}
const{name,age} = obj;
console.log(name)
console.log(age)
console.log(obj)


const arr = [1,2,3,4]
const [_,,val3,val4] = arr
console.log(_)
//console.log(val2)
console.log(val3)
console.log(val4)


const fullName = "Jaffar Aman";
const stdobj = {
    fullName : "Huzaifa Shahid"
}

const {fullName : stdname} = stdobj
console.log(fullName)
console.log(stdname)

