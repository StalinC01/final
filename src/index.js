const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productoRoutes = require('./routes/productoRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/productos', productoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});