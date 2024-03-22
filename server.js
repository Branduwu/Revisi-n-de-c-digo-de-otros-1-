const express = require('express');
const app = express();

// Ruta para servir archivos estáticos
app.use(express.static('public'));

// Inicia el servidor
app.listen(5500, () => {
  console.log('Servidor iniciado en http://localhost:5500');
});
