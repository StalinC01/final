const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'venta_ropa',//Cambio de base de datos por otra si no vale la que teniamos
    port: '3306'//cambio de puerto al que tienen
});

db.connect((err) => {
    if(err) {
        console.error('Error conectando a Mysql:', err);
        return;
    }
    console.log('Conectado a Mysql ');
});

module.exports = db;