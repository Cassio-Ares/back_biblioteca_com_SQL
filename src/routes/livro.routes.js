const { Router} = require('express');
const LivroController = require('../controllers/livroController.js');

const livroRoutes = Router();
let livroController = new LivroController();

livroRoutes.post(
    '/livro',
    livroController.cadastrarLivro
);

livroRoutes.get(
    '/livros',
    livroController.listarLivros
);

livroRoutes.get(
    '/livro/:id',
    livroController.listarLivrosPorId
);

livroRoutes.put(
    '/livro/id',
    livroController.atualizarLivro
);

livroRoutes.delete(
    '/livro/:id',
    livroController.excluirLivro
);


module.exports =livroRoutes;