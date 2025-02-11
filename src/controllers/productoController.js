const Producto = require('../models/productoModel');

const ProductoController = {
    obtenerProductos: (req, res) => {
        Producto.obtenerTodos((err, results) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json(results);
            }
        });
    },
//social
    obtenerProductoPorId: (req, res) => {
        const { id } = req.params;
        Producto.obtenerPorId(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                if (result.length > 0) {
                    res.json(result[0]);
                } else {
                    res.status(404).json({ message: 'Producto no encontrado' });
                }
            }
        });
    },

    crearProducto: (req, res) => {
        const producto = req.body;
        Producto.crear(producto, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ id: result.insertId, ...producto });
            }
        });
    },

    actualizarProducto: (req, res) => {
        const { id } = req.params;
        const producto = req.body;
        Producto.actualizar(id, producto, (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: 'Producto actualizado' });
            }
        });
    },

    actualizarProductoParcial: (req, res) => {
        const { id } = req.params;
        const producto = req.body;
        Producto.actualizarParcial(id, producto, (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: 'Producto parcialmente actualizado' });
            }
        });
    },

    eliminarProducto: (req, res) => {
        const { id } = req.params;
        Producto.eliminar(id, (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: 'Producto eliminado' });
            }
        });
    },
};

module.exports = ProductoController;