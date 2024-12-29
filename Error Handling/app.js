// const foo = () => {
//     try {
//         const first = "Huzaifa"
//         console.log(first);
//         console.log(last);
        
//     } catch (error) {
//         console.log(error.message);       
//     }
// }

// foo()


//forcefully error generate
// const foo = () => {
//     try{
//         const isadmin = false
//         if(isadmin){
//             console.log("Allowed");
            
//         }else{
//             throw "Not Allowed"
//         }
//     }catch(error){
//         console.log(error.message);
        
//     }
// }

// foo()




// const myProm = new Promise((resolve,reject) =>{
//     const bool = false
//     if(bool){resolve({
//         status : true,
//         message : "Successfully",
//         data : []
//     })}else{reject({
//         status : false,
//         message : "Rejected",
//         data : null
//     })}
// })
// .then(resolve=>{
//     console.log(resolve);   
// }).catch(reject =>{
//     console.log(reject);
    
// })