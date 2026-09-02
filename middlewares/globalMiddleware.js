module.exports = function middlewareGlobal (req, res, next){
    console.log(req.method, req.url);

    next()
}