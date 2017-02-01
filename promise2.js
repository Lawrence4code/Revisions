var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (typeof a === 'number' && typeof b === 'number') {
                resolve (a+b);
            } else {
                reject('Argument must numbers');
            }
        },1500)
    })
}

asyncAdd(7, 4).then((result) => {
    console.log(`Result of the first asyncAdd function: ${result}`)
    return asyncAdd(result, 4).then((result) => {
        console.log(`Result of the second asyncAdd function: ${result}`)
    }, (err) => {
        console.log(`Error from second asyncAdd Function: ${err}`);
    })
}, (error) =>{
    console.log(`Error from first asyncAdd function: ${error}`);
})