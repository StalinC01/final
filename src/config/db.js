const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'venta_ropa',
    port: '3307' //base de datos puerto correspondiente no funsiona el 3306
});

db.connect((err) => {
    if(err) {
        console.error('Error conectando a Mysql:', err);
        return;
    }
    console.log('Conectado a Mysql ');
});

module.exports = db;