const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato');
});

app.get('/sobre', (req, res) => {
  res.send('Somos uma empresa');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});