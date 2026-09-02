const express = require('express');
const app = express();
const routes = require('./routes')
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});



app.use((err, req, res, next) => {
     console.error('Erro capturado:', err.message);
     res.status(500).send('Algo quebrou no servidor');
})
