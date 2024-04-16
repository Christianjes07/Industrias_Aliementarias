const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')



const app = express();

app.use(myconn(mysql, {
    host: 'localhost',
    port: 3306,
    user: 'root', 
    password: '1234',
    database: 'images'
}))



app.use(require('../routes/routes'))

app.listen(8080, () => {
    console.log('server is running on,', 'http://localhost:', 8080)
})


