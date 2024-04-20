const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});


const PORT = 8080 || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
