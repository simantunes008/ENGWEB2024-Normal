var express = require('express');
var router = express.Router();
var Contrato = require("../controllers/contratos");

/* GET /contratos?entidade=EEEE */
router.get('/', function(req, res, next) {
    if (req.query.entidade) {
        Contrato.findByEntidade(req.query.entidade)
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ error: err.message }));
    } else {
        next(); // Passa para o próximo middleware se não houver entidade especificada
    }
});

/* GET /contratos?tipo=AAA */
router.get('/', function(req, res, next) {
    if (req.query.tipo) {
        Contrato.findByProcedimento(req.query.tipo)
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ error: err.message }));
    } else {
        next(); // Passa para o próximo middleware se não houver tipo especificado
    }
});

/* GET /contratos */
router.get('/', function(req, res, next) {
    Contrato.list()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err.message }));
});

/* GET /contratos/entidades */
router.get('/entidades', function(req, res, next) {
    Contrato.entidades()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err.message }));
});

/* GET /contratos/tipos */
router.get('/tipos', function(req, res, next) {
    Contrato.procedimentos()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err.message }));
});

/* GET /contratos/:id */
router.get('/:id', function(req, res, next) {
    Contrato.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err.message }));
});

/* POST /contratos */
router.post('/', function(req, res, next) {
    Contrato.insert(req.body)
      .then(data => res.jsonp(data))
      .catch(errp => res.jsonp(erro))
});

/* DELETE /contratos/:id */
router.delete('/:id', function(req, res, next) {
    Contrato.delete(req.params.id)
      .then(console.log("Deleted " + req.params.id))
      .catch(errp => res.jsonp(erro))
});

/* PUT /contratos/:id */
router.put('/:id', function(req, res, next) {
    Contrato.update(req.params.id, req.body)
      .then(data => res.jsonp(data))
      .catch(errp => res.jsonp(erro))
});

module.exports = router;
