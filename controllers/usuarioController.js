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
    const nome = req.body.nome;
    const email = req.body.email;

    res.send(`Formulario enviado, nome: ${nome}, email: ${email}`);
    console.log(req.body)

}