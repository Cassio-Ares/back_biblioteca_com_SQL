const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const livrosRoutes = require('./routes/livros.routes');
const cors = require('cors');

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(livrosRoutes);

module.exports = app;