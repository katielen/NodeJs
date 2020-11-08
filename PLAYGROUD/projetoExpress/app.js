// comando para abrir um arquivo package.json -> npm init -y (é imp. dentro de um projeto node)
// const express = require('express');

// let app = express();

// aspp.get('/', (req, resp) => resp.send("olá mundo"));
// app.get('/contatos', (req, resp) => resp.send(["Contato1", "Contato2"]));
// app.get('/contatos', (req, resp) => resp.send({ nome: "katielen", idade: 23 }));

//O método app.get() especifica uma função de retorno de chamada que será invocada sempre que exista uma solicitação HTTP GET com um caminho ('/') relativo à raiz do site. A função de retorno de chamada requer uma solicitação e um objeto de resposta como argumentos, e simplesmente chama send() na resposta para retornar a string "Olá Mundo!"


// app.listen(3000, () => console.log("Servidor rodando na porta 3000"));


// o id é utilizado para buscar um parametro indefinido pelo cliente 
// const express = require('express');

// let app = express();

// app.get('/', (req, res) => resp.send("olá mundo!"));
// app.get('/contatos', (req, res) => res.send("Pagina contato"))
// app.get('/produtos/:id?'), (req, res) => {
//     let { id } = req.params;
//     console.log("Eu tenho um produto com o id : " + id)
// }
// //criando um servidor 
// app.listen(3000, () => console.log("Servidor rodando na porta 3000"));


// router abre uma nova variavel dentro da requisição;
// const express = require('express');
// const router = express.Router();
//rota raiz de produto / inicio; 
// router.get('/', (req, res) => {
//     //codigo
// });
// module.exports = router;
// const rotasProdutos = require('./router/produto');
// app.use('/produtos', rotasProdutos);
//rota que exibe o detalhe de um produto;
// router.get('/detalhe/:id', (req, res) => {
//     //codigo
// });

const express = require('express');
const rotasProdutos = require('./rotas/rotasProduto');

app.get('/', (req, res) => res.send("olá mundo"))
app.get('/contatos', (req, res) => res.send("Pagina Contatos"));

app.use('/produtos', rotasProdutos);
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));


