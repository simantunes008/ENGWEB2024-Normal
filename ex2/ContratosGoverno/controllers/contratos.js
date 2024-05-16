var Contrato = require("../models/contratos")

module.exports.list = () => {
    return Contrato
        .find()
        .exec()
}

module.exports.findById = (id) => {
    return Contrato
        .findOne({idcontrato: id })
        .exec();
}

module.exports.findByEntidade = (entidade) => {
    return Contrato
        .find({ entidade_comunicante : entidade })
        .exec();
}

module.exports.findByProcedimento = (procedimento) => {
    return Contrato
        .find({ tipoprocedimento : procedimento })
        .exec();
}

module.exports.entidades = () => {
    return Contrato
        .distinct('entidade_comunicante')
        .exec();
}

module.exports.procedimentos = () => {
    return Contrato
        .distinct('tipoprocedimento')
        .exec();
}

module.exports.insert = (contrato) => {
    if ((Contrato.find({idcontrato : contrato.idcontrato}).exec()).length != 1) {
        var newContrato = new Contrato(contrato)
        return newContrato.save()
    }
}

module.exports.delete = (id) => {
    return Contrato
        .find({idcontrato : id})
        .deleteOne()
        .exec()
}

module.exports.update = (id, contrato) => {
    return Contrato
        .findByIdAndUpdate(id, contrato, {new : true})
        .exec()
}
