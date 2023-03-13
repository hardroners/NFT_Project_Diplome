const fs = require('fs');
const path = require('path');
const fleek = require('@fleekhq/fleek-storage-js');   


const apiKey = 'tEgyrrlCPoVt4cu1i4Qlxw==';
const apiSecret = 'xbcWexeLICXxIns6zMXic9PNNbEoBXBi13LlC14zvLI=';

async function testFunctionUpload(){

  const input = {
    apiKey,
    apiSecret,
    key: "tt.txt",
    data : "testkokok",
  };

  try {
    const result = await fleek.upload(input);
    console.log(result);
  } catch(e) {
    console.log('error', e);
  }
}
testFunctionUpload();