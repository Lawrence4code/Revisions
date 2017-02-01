var somePromise = new Promise((resolve, reject) => {        // Creating a new variable and using Function constructor to get the result, function cons take one argument, in this this case its function
    setTimeout(() => {                                      // Just to simulate the delayed as its happend in synchronous pattern
    //resolve('Hey, it worked!');                           // To be printed when promise is fulfilled
    reject('Oie, it failed');                               // To be printed when promise is rejected
    console.log(typeof resolve);                            // Type is Function
    console.log(typeof reject);                             // Type is Function
    console.log(resolve);                                   // Not sure of the result###
    console.log(reject);                                    // Not sure of the result###
    },2500);                                                // Delay time (its a argument)
});

somePromise.then((message) =>{
    console.log(`Sucess: ${message}`);
}, (error) =>{
    //console.log(`Failed: ${error}`);
});