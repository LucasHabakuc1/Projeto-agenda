const Contato = require('../models/ContatoModel');

exports.index = (req, res,) => {
    res.render('index');
};

exports.index = async (req, res) => {
    const contatos = await Contato.buscaContatos();
    res.render('index', { contatos });
}
