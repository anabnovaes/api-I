// declarando que o express será utilizado
const express = require('express');
//instanciando o express 
const server = express()
// instanciando as rotas e definindo as requisições e responses
server.get('/', function(req,res){
    res.send('hello world');
});

server.get('/teste', function(req,res){
    res.send('Teste');
});

server.get('/users/:username', (req, res, next) =>{
    res.json(req.params);
}
)



server.get('/books/:bookId', (req, res, next) =>{
    res.send(req.params);
})

server.get('/users/:username/books/:bookId', (req, res, next) =>{
    res.send(req.params);
})

server.get('/search',(req, res, next)=>{
    res.json(req.query)
})
// informando a porta que será usada 
server.listen(3000);