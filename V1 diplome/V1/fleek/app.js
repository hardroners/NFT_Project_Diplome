const http = require('http');
const express = require('express');
const fleekStorage = require('@fleekhq/fleek-storage-js'); 
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
  const testPath = path.resolve(__dirname, 'C:/Users/33781/Documents/GitHub/NFT_Project_Diplome/V1 diplome/V1/fleek/testHTML.html');
  res.sendFile(testPath);
});

app.get('/index.html',function (req,res){
  const indexPath = path.resolve('C:/Users/33781/Documents/GitHub/NFT_Project_Diplome/V1 diplome/V1/index.html');
  res.sendFile(indexPath)
});
app.get('/faqs.html',function (req,res){
  const faqsPath = path.resolve(__dirname, 'C:/Users/33781/Documents/GitHub/NFT_Project_Diplome/V1 diplome/V1/faqs.html')
  res.sendFile(faqsPath)
});
app.get('/diploma.html',function (req,res){
  const diplomaPath = path.resolve(__dirname, 'C:/Users/33781/Documents/GitHub/NFT_Project_Diplome/V1 diplome/V1/diploma.html')
  res.sendFile(diplomaPath)
});
app.get('/manage_diploma.html',function (req,res){
  const manage_diplomaPath = path.resolve(__dirname, 'C:/Users/33781/Documents/GitHub/NFT_Project_Diplome/V1 diplome/V1/manage_diploma.html')
  res.sendFile(manage_diplomaPath)
});
app.get('/test.html',function (req,res){
  const testPath = path.resolve(__dirname, 'C:/Users/33781/Documents/GitHub/NFT_Project_Diplome/V1 diplome/V1/test.html')
  res.sendFile(testPath)
});

app.listen(3000);