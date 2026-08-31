const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato');
});

app.get('/usuarios/:id', (req, res) => {
  res.send(`Ola usuario ${req.params.id}`);
});

app.put('/usuarios/:id', (req, res) => {
  res.send(`Ola usuario ${req.body.nome}, usuario ${req.params.id}`);
});

app.get('/usuarios', (req, res) => {
  res.send(`Ola usuario ${req.query.nome}, voce ta na pagina ${req.query.pagina} <br> <form action="/usuarios" method="post">
    email <input type="text" name="email">
    <br>
    nome <input type="text" name="nome">
    <br>
    <button>Enviar</button>
</form>`);
});

app.post('/usuarios', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;

    res.send(`Formulario enviado, nome: ${nome}, email: ${email}`),
    console.log(req.body)

})

app.get('/usuarios', (req, res) => {
  res.send(`Ola usuario ${req.query.nome}, voce ta na pagina ${req.query.pagina}`);
});

app.get('/sobre', (req, res) => {
  res.send('Somos uma empresa');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});