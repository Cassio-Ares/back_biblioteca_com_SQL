const mySql = require('mySql2');

require('dotenv').config();

const connection = mySql.createConnection({
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || 'database',
});

connection.connect(function (err){
   if(err){
    console.error('Error ao conectar com banco de dados:' + err.stack);
    return
   };
   console.log('Conexão bem sucedida');
});

module.exports = connection;