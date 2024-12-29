// fetch("https://fakestoreapi.com/products")
// .then((response) =>{
//     return response.json()
// })
// .then((result) =>{
//     console.log(result)
//     for (let i = 0; i < result.length; i++) {
//            console.log(result[i]);
//     }
// })
// .catch((error) =>{
//     console.log(error);
    
// })




//Method 1
// const myPromise = new Promise((resolve,reject) => {
//     var api = false
//     if(api){
//         console.log("Succesfully Executed")
//     }else{
//         console.log("Something Went Wrong");       
//     }
// });

// myPromise.then((result) =>{
//     console.log(result);
// })
// myPromise.catch((error) =>{
//     console.log(error);
// })




//Method 2

// const reqApi = async () =>{
//     console.log("Hello Huzaifa 1");
//     console.log("Hello Huzaifa 2");
//     var Aapi = await false
//     console.log("Hello Huzaifa 3");    
// }

// reqApi()






const fetchApi = async () =>{
    console.log("Hello Huzaifa 1");
    console.log("Hello Huzaifa 2");
    var Aapi = await fetch("https://fakestoreapi.com/products").then((response) =>{
        return response.json()
    })
    console.log(Aapi);
    for (let i = 0; i < Aapi.length; i++) {
        console.log(Aapi[i]);
            
    }
    console.log("Hello Huzaifa 3");  
    console.log("Hello Huzaifa 4");
    console.log("Hello Huzaifa 5");  
}

fetchApi()




const reqApi = async () =>{
    try{
        const response = await fetch("https://fakestoreapi.com/products").then(res=>res.json())
        console.log(response);
    }catch(error){
        console.log(error);
        
    }
}

reqApi()