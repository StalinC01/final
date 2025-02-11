document.addEventListener('DOMContentLoaded', () => {
    const productosContainer = document.getElementById('productos-container');
    const formAgregar = document.getElementById('form-agregar');
    const formEditar = document.getElementById('form-editar');
    const formEditarContainer = document.getElementById('form-editar-container');

    // Función para cargar y mostrar los productos
    const cargarProductos = async () => {
        try {
            const response = await fetch('/productos');
            const productos = await response.json();
            productosContainer.innerHTML = ''; // Limpiar el contenedor

            productos.forEach(producto => {
                const productoDiv = document.createElement('div');
                productoDiv.className = 'producto';
                productoDiv.innerHTML = `
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p>Precio: $${producto.precio}</p>
                    <p>Talla: ${producto.talla}</p>
                    <p>Color: ${producto.color}</p>
                    <p>Stock: ${producto.stock}</p>
                    <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
                    <button onclick="mostrarFormularioEditar(${producto.id})">Modificar</button>
                `;
                productosContainer.appendChild(productoDiv);
            });
        } catch (error) {
            console.error('Error cargando productos:', error);
        }
    };

    // Función para agregar un producto
    formAgregar.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nuevoProducto = {
            nombre: document.getElementById('nombre').value,
            descripcion: document.getElementById('descripcion').value,
            precio: parseFloat(document.getElementById('precio').value),
            talla: document.getElementById('talla').value,
            color: document.getElementById('color').value,
            stock: parseInt(document.getElementById('stock').value)
        };

        try {
            const response = await fetch('/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevoProducto)
            });

            if (response.ok) {
                cargarProductos(); // Recargar la lista de productos
                formAgregar.reset(); // Limpiar el formulario
            }
        } catch (error) {
            console.error('Error agregando producto:', error);
        }
    });

    // Función para eliminar un producto
    window.eliminarProducto = async (id) => {
        try {
            const response = await fetch(`/productos/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                cargarProductos(); // Recargar la lista de productos
            }
        } catch (error) {
            console.error('Error eliminando producto:', error);
        }
    };

    // Función para mostrar el formulario de edición
    window.mostrarFormularioEditar = async (id) => {
        try {
            const response = await fetch(`/productos/${id}`);
            const producto = await response.json();

            // Rellenar el formulario de edición con los datos del producto
            document.getElementById('editar-id').value = producto.id;
            document.getElementById('editar-nombre').value = producto.nombre;
            document.getElementById('editar-descripcion').value = producto.descripcion;
            document.getElementById('editar-precio').value = producto.precio;
            document.getElementById('editar-talla').value = producto.talla;
            document.getElementById('editar-color').value = producto.color;
            document.getElementById('editar-stock').value = producto.stock;

            // Mostrar el formulario de edición
            formEditarContainer.style.display = 'block';
        } catch (error) {
            console.error('Error cargando producto para editar:', error);
        }
    };

    // Función para cancelar la edición
    window.cancelarEdicion = () => {
        formEditarContainer.style.display = 'none';
    };

    // Función para guardar los cambios de la edición
    formEditar.addEventListener('submit', async (e) => {
        e.preventDefault();

        const productoEditado = {
            nombre: document.getElementById('editar-nombre').value,
            descripcion: document.getElementById('editar-descripcion').value,
            precio: parseFloat(document.getElementById('editar-precio').value),
            talla: document.getElementById('editar-talla').value,
            color: document.getElementById('editar-color').value,
            stock: parseInt(document.getElementById('editar-stock').value)
        };

        const id = document.getElementById('editar-id').value;

        try {
            const response = await fetch(`/productos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productoEditado)
            });

            if (response.ok) {
                cargarProductos(); // Recargar la lista de productos
                formEditarContainer.style.display = 'none'; // Ocultar el formulario de edición
            }
        } catch (error) {
            console.error('Error editando producto:', error);
        }
    });

    // Cargar los productos al iniciar la página
    cargarProductos();
});