const express = require('express');
const ProductoController = require('../controllers/productoController');

const router = express.Router();

router.get('/', ProductoController.obtenerProductos);         // GET: obtener todos los productos
router.get('/:id', ProductoController.obtenerProductoPorId);  // GET: obtener producto por ID
router.post('/', ProductoController.crearProducto);           // POST: crear un producto
router.put('/:id', ProductoController.actualizarProducto);   // PUT: actualizar producto completo
router.patch('/:id', ProductoController.actualizarProductoParcial); // PATCH: actualizar parcialmente
router.delete('/:id', ProductoController.eliminarProducto);  // DELETE: eliminar producto

module.exports = router;