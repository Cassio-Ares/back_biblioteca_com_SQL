create table livros (
    id int AUTO_INCREMENT,
    titulo VARCHAR(255) not null,
    isbn int,
    autor VARCHAR(200),
    editora VARCHAR(100) not null,
    ano YEAR,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP on UPDATE CURRENT_TIMESTAMP
    PRIMARY KEY (id)
);