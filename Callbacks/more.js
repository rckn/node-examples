function doWork(callback) {
    var ran = Math.random();
    callback(ran);
}

doWork( (data) => console.log('The lucky number is ' + data));