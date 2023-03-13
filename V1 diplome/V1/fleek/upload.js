const fs = require('fs');
const path = require('path');
const fleek = require('@fleekhq/fleek-storage-js');   
const { stringify } = require('querystring');


const apiKey = 'tEgyrrlCPoVt4cu1i4Qlxw==';
const apiSecret = 'xbcWexeLICXxIns6zMXic9PNNbEoBXBi13LlC14zvLI=';

async function testFunctionUpload(nom,prenom,annee,filiere,jury,diplome){

  data = `{
    "nom" : "${nom}",
    "prenom" : "${prenom}",
    "annee" : "${annee}",
    "filiere" : "${filiere}",
    "jury" : "${jury}",
    "diplome" : "${diplome}" 
  }`;


  const input = {
    apiKey,
    apiSecret,
    key: nom+"_"+prenom,
    data : data,
  };

  try {
    const result = await fleek.upload(input);
    console.log(result);
  } catch(e) {
    console.log('error', e);
  }
}
