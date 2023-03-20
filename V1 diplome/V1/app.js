const http = require('http');
const express = require('express');
const fleekStorage = require('@fleekhq/fleek-storage-js'); 
const fs = require('fs');
const path = require("path")
const app = express();
const Web3 = require('web3');
const fetch = require('node-fetch');
const axios = require('axios');
const { FunctionUpload } = require('./fleek/upload.js') 
const multiparty = require('connect-multiparty')

const uploadMiddleware = multiparty();

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'vendor')));
app.use(express.static(path.join(__dirname, 'eth')));
app.use(express.static(path.join(__dirname, 'back')));
app.use(express.static(path.join(__dirname, 'fleek')));
app.use(express.static(path.join(__dirname, 'authentification')));
app.use(express.static(path.join(__dirname, 'page')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/page/index.html');
});


app.post('/manage_diploma.html', uploadMiddleware,(req,res) => {

  dataPDF = fs.readFileSync(req.files.diplome_create.path);

  FunctionUpload(req.body.nom_create,req.body.prenom_create,req.body.annee_create,req.body.filiere_create,req.body.jury_create,req.files.diplome_create.path);

  res.sendFile(__dirname + '/page/manage_diploma.html');
});

app.post('/test.html',(req,res) => {
  
  console.log(req.body);
  
});


app.listen(3000);