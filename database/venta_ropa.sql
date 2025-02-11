-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS venta_ropa;
USE venta_ropa;

-- Crear la tabla productos
CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    talla VARCHAR(10),
    color VARCHAR(50),
    stock INT NOT NULL
);

-- Insertar datos de ejemplo (opcional)
INSERT INTO productos (nombre, descripcion, precio, talla, color, stock) VALUES
('Camiseta básica', 'Camiseta de algodón 100%', 19.99, 'M', 'Blanco', 50),
('Pantalón vaquero', 'Pantalón vaquero ajustado', 39.99, 'L', 'Azul', 30),
('Zapatillas deportivas', 'Zapatillas cómodas para correr', 59.99, '42', 'Negro', 20),
('Chaqueta de cuero', 'Chaqueta de cuero genuino', 99.99, 'XL', 'Marrón', 10);