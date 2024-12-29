// calling api

// fetch()

// const arr =

let response;
fetch("https://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })

  .then((result) => {
    // response = result
    console.log("result", result);
    for (var i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
  })
  .catch((error) => {
    console.log("error", error);
  });

// fetch("https://fakestoreapi.com/products")
// .then((response)=>{
//     return response.json()
// })
// .then((result) =>{
//     console.log(result)
// })
// .catch((error) =>{
//     console.log(error)
// })
