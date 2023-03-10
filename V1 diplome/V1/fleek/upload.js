const fs = require('fs');
const path = require('path');
const fleek = require('@fleekhq/fleek-storage-js');   


const apiKey = 'tEgyrrlCPoVt4cu1i4Qlxw==';
const apiSecret = 'xbcWexeLICXxIns6zMXic9PNNbEoBXBi13LlC14zvLI=';

const testFunctionUpload = async (data) => {

  const input = {
    apiKey,
    apiSecret,
    key: "TEST/tt.txt",
    data : "test",
  };

  try {
    const result = await fleek.upload(input);
    console.log(result);
  } catch(e) {
    console.log('error', e);
  }
}

const filePath = path.join( 'test.json');

fs.readFile(filePath, (err, data) => {
  if(!err) {
    testFunctionUpload(data);
  }
})
