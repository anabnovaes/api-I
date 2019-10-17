const express = require('express');

const server = express()

const usuarios = ['banana', 'fulano', 'ciclano']

// criando rota GET que responde "hello world na rota /"
server.get('/', function(req,res){
    res.json('Hello world')
})
// criando rota GET que retorna a lista de usuarios ao acessar a rota usuarios
server.get('/users', function(req,res){
    res.json(usuarios);
})
//criando rota GET que use params para trazer um unico usuario
server.get('/users/:users', function(req,res){
    const id = req.params.users
    return res.json(users[id])
})


server.listen(3000)