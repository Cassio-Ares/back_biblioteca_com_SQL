const Livro = require('../models/Livro');
const livroModel = new Livro();


// controler é o local ideal para colocar-mos regras de negocio 
class LivroController {
    async cadastrarLivro(req, res) {
        const item = req.body;
        const cadastro = await livroModel.criar(item);
        return res.status(cadastro.status).send(cadastro.response);
    };

    async listarLivros(req, res){
        const livros = await livroModel.listar();
        return res.status(livros.status).send(livros.response);
    };

    async listarLivroPorId(req, res){
        const id = parseInt(req.params.id);
        const livro = await livroModel.listarPorId(id);
        return res.status(livro.status).send(livro.response);
    };

    async atualizarLivros(req, res){
        const item = req.body;
        const id = parseInt(req.params.id);
        const atualizacao = await livroModel.atualizar(item, id);
        return res.status(atualizacao.status).send(atualizacao.response);
    }
}

module.exports = LivroController;