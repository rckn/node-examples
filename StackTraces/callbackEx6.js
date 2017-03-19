// Remember to follow the error first callback style!
// You can experiment with throwing and error and see how it get handled
function a() {
    console.log('a');
    b(c);
}

function b(callback) {
    console.log('b');

    var greeting = 'hello';

    var resultCallback = (err, result) => {
         console.log('resultCallback');
        if (err) {
            return console.log(err);
        }
        console.log(greeting + " " + result);
        console.trace('trace from callback in b');
    }

    try {
        //.. do some fancy logic before we call our callback
        // setImmediate tell node to execute callback through the event loop
        setImmediate(callback, null, resultCallback); // think of it as cb(resCB)
    } catch (error) {
        // if our fancy logic failed, we will notify through callbacks
        setImmediate(callback, error, resultCallback); // think of it as cb(resCB)
    }

}

function c(err, callback) {
    console.log('c');
    if (err) return callback(err);

    try {
        // do fancy logic
        // ops and error occoured, what will happen?
        throw new Error('some error in our fancy logic');
        callback(null, 42);
    } catch (error) {
        callback(error);
    }

}

a();