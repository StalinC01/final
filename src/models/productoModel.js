const db = require('../config/db');

const Producto = {
    obtenerTodos: (callback) => {
        const sql = 'SELECT * FROM productos';
        db.query(sql, callback);
    },

    obtenerPorId: (id, callback) => {
        const sql = 'SELECT * FROM productos WHERE id = ?';
        db.query(sql, [id], callback);
    },

    crear: (producto, callback) => {
        const sql = 'INSERT INTO productos (nombre, descripcion, precio, talla, color, stock) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(sql, [producto.nombre, producto.descripcion, producto.precio, producto.talla, producto.color, producto.stock], callback);
    },

    actualizar: (id, producto, callback) => {
        const sql = 'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, talla = ?, color = ?, stock = ? WHERE id = ?';
        db.query(sql, [producto.nombre, producto.descripcion, producto.precio, producto.talla, producto.color, producto.stock, id], callback);
    },

    actualizarParcial: (id, producto, callback) => {
        const sql = 'UPDATE productos SET nombre = IFNULL(?, nombre), descripcion = IFNULL(?, descripcion), precio = IFNULL(?, precio), talla = IFNULL(?, talla), color = IFNULL(?, color), stock = IFNULL(?, stock) WHERE id = ?';
        db.query(sql, [producto.nombre, producto.descripcion, producto.precio, producto.talla, producto.color, producto.stock, id], callback);
    },

    eliminar: (id, callback) => {
        const sql = 'DELETE FROM productos WHERE id = ?';
        db.query(sql, [id], callback);
    },
};

module.exports = Producto;