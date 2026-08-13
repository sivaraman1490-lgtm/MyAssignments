const promise = new Promise((resolve, reject) => 
    {
        let success = false;
        if (success) {
            resolve("Promise is resolved successfully");
  
      } else {
            reject("Promise is rejected");

        }       
            
    });
promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
} );        