# Back-end da Biblioteca com MySQL

Este é o repositório do projeto do Back-end da Biblioteca, uma API desenvolvida para gerenciar livros utilizando MySQL como banco de dados.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- **src/controllers**: Contém os controladores da API, incluindo o `LivroController.js`.
  
- **src/database**: Contém o arquivo de configuração e conexão com o banco de dados MySQL, `db.js`, e o script SQL para criar a estrutura do banco de dados, `script.sql`.

- **src/models**: Contém os modelos de dados da aplicação, como o modelo `Livro.js`.

- **src/routes**: Contém as rotas da API, incluindo o arquivo `livro.routes.js` que define as rotas para cada operação CRUD.

- **src**: Contém o arquivo principal da aplicação, `app.js`, que configura e inicializa o servidor Express, e o arquivo de inicialização do servidor, `server.js`.

## Funcionalidades

A API fornece as seguintes funcionalidades:

- Cadastro de livros
- Listagem de todos os livros
- Consulta de um livro por ID
- Atualização de informações de um livro
- Exclusão de um livro

## Tecnologias Utilizadas

- Node.js
- Express.js
- MySQL

## Como Executar Localmente

Para executar este projeto localmente, siga estas etapas:

1. Clone este repositório:

git clone https://github.com/Cassio-Ares/back_biblioteca_com_SQL.git


2. Navegue até o diretório do projeto:

cd back_biblioteca_com_SQL


3. Instale as dependências do projeto:

npm install


4. Certifique-se de ter o MySQL instalado e em execução em sua máquina.

5. Execute o script SQL `script.sql` para criar a estrutura do banco de dados.

6. Renomeie o arquivo `EXEMPLO.env` na pasta raiz do projeto para `.env` para que as variáveis de ambiente sejam definidas corretamente.

7. Inicie o servidor:

npm start

8. A API estará disponível em `http://localhost:5000`.
