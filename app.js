const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

function middlewareGlobal (req, res, next){
    console.log(req.method, req.url);

    next()
}
function middlewareHeader (req, res, next){
    if(!req.headers.authorization) return res.status(401).send('Acesso negado')

    next()
}
function checagem (req, res, next){
    const nome = req.query.nome
    if(!nome) {
        console.log('sem nome')
    }
    if(req.status === 403 ) {
        res.send("Erro");
        return
    }

    next()
}

app.get('/', middlewareGlobal,(req, res) => {
  res.send('Olá, mundo!');
});

app.get('/contato', middlewareHeader, (req, res) => {
  res.send('Obrigado por entrar em contato');
});

app.get('/usuarios/:id', middlewareGlobal, checagem, (req, res) => {
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
    throw new Error('Deu algo errado')
    res.send('Somos uma empresa');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});



app.use((err, req, res, next) => {
     console.error('Erro capturado:', err.message);
     res.status(500).send('Algo quebrou no servidor');
})
