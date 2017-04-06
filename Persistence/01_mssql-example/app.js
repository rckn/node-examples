var sql = require('mssql');

var configLocalBooks = {
    user: 'nodeuser',
    password: 'nodeuser123',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    port: 1533,
    database: 'Books', // the local instance does not have an 'I'
    options: {
        encrypt: false // Use true if you're on Windows Azure
    }
};

sql.connect(configLocalBooks, function (err) {
    console.log(err);

        new sql.Request().query('select * from Books', (err, result) => {
        // ... error checks 
        if(err) return console.log(err);
        console.log(result);
    })
 
});