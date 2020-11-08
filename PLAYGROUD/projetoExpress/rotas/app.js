const express = require('express');
const rotasProdutos = require('./rotas/rotasProduto');
let app = express();

app.get('/', (req, res) => res.send("olá mundo!"));
app.get('/contatos', (req, res) => res.send("Pagina Contatos"));


app.use('/produtos', rotasProdutos);
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));


