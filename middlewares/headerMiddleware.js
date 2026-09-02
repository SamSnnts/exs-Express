module.exports = function middlewareHeader (req, res, next){
    if(!req.headers.authorization) return res.status(401).send('Acesso negado')

    next()
}