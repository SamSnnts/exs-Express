module.exports = function checagem (req, res, next){
    const nome = req.query.nome
    if(!nome) {
        console.log('sem nome')
    }
    if(res.status(403)) {
        res.send("Erro");
        return
    }

    next()
  }
