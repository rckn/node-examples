async function a() {
  let temp = await b(c);
  console.log('temp is ' + temp);
  return temp;
}

async function b() {
    // we can await the function defined in C
    return await c();
}

function c() {
    // The async & await works with promises. In order for a function to be 
    // awaitable, we must return a promise
    return new Promise((resolve, reject) => {
        setTimeout(function (err) {
            if(err) { reject('error' + err); return; }
            resolve(42);
        }, 1000);
    });

}

// Val is in our main method, and is not async, therefore val will just be a promise
var val = a(); 

console.log('val is ' + val);