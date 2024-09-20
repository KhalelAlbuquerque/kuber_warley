const express = require('express');
const app = express();

const port = 3031;

app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
