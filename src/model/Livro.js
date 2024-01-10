const db = require('../database/db');

class Livro {
    async criar(item){
        try{
            await db.promise().query(
                `insert into livros (titulo, isbn, autor, editora, ano)
                 values (${item.titulo}, ${item.isbn}, ${item.autor}, ${item.editora}, ${item.ano})`)
            return {status: 200, response: 'Livro cadastrado com sucesso'};
        }catch(error){
            return {status: 500, response: 'Erro ao cadastrar livro no banco de dados'};
        }
    };

    async listar(){

    };

   async listarPorId(id){
    try{
        const res = await db.promise().query(
            `select * from livros
             where id = ${id}`
    );
    return {status: 200, response: res[0]}

    }catch(error){
     return {status: 500, response: 'Erro ao obter livro do banco de dados'};
    }
   };

   async atualizar(item, id){
    try {
        await db.promise().query(
            `update livro
                set titulo = ${item.titulo},
                isbn = ${item.isbn},
                autor = ${item.autor},
                editora = ${item.editora},
                ano = ${item.ano}
            where id = ${id}
            `)

        return {status: 200, response:"Livro atualizado como sucesso"}
    } catch (error) {
        return {status: 500, response: "Erro ao atualizar livro no banco de dados"};
    }
   };

   async excluir(id){
    try {
        await db.promise().query(`
           delete from livros
            where id = ${id}
        `)

        return {status: 200, response: "Livro deletado com sucesso" }
    } catch (error) {
        return{status: 404, response: "Erro ao tentar excluir livro do banco de dados"}
    }
   }


}