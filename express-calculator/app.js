var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Welcome to Express Calculator!')
});

app.get('/calc/add/:num1/:num2', function(req, res){
  res.send(req.params.num1 + " + " + req.params.num2 + " = " + (parseInt(req.params.num1) + parseInt(req.params.num2)))
})

app.get('/calc/subtract/:num1/:num2', function(req, res){
  res.send(req.params.num1 + " - " + req.params.num2 + " = " + (parseInt(req.params.num1) - parseInt(req.params.num2)))
})

app.get('/calc/multiply/:num1/:num2', function(req, res){
  res.send(req.params.num1 + " * " + req.params.num2 + " = " + (parseInt(req.params.num1) * parseInt(req.params.num2)))
})
app.get('/calc/divide/:num1/:num2', function(req, res){
  res.send(req.params.num1 + " / " + req.params.num2 + " = " + (parseInt(req.params.num1) / parseInt(req.params.num2)))
})

app.listen(4000, function(){
  console.log('Starting a server on localhost:4000');
})
