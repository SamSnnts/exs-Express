exports.usuarioGetParams = (req, res) => {
  res.send(`Ola usuario ${req.params.id}`);
};

exports.usuarioPut = (req, res) => {
  res.send(`Ola usuario ${req.body.nome}, usuario ${req.params.id}`);
};

exports.usuarioGetHome = (req, res) => {
  res.send(`Ola usuario ${req.query.nome}, voce ta na pagina ${req.query.pagina} <br> <form action="/usuario" method="post">
    email <input type="text" name="email">
    <br>
    nome <input type="text" name="nome">
    <br>
    <button>Enviar</button>
</form>`);
};

exports.usuarioPost = (req, res) => {
    

    res.render('index', {
        nome : req.body.nome,
        email : req.body.email,
        itens: ['banana', 'maça', 'pera']
    });
    console.log(req.body)

}