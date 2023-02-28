const fs = require('fs');
const path = require('path');
const fleek = require('@fleekhq/fleek-storage-js');   


const apiKey = "f+rTHEWsFzFegWoqUQcAXmqQ==";
const apiSecret = "vPLPC900y69NNPdORC7a7Mh8cEqv3nuUD8CMopWTAAg=";

const testFunctionUpload = async (data) => {
  const date = new Date();
  const timestamp = date.getTime();

  const input = {
    apiKey,
    apiSecret,
    key: "TEST/test9.json",
    data,
  };

  try {
    const result = await fleek.upload(input);
    console.log(result);
  } catch(e) {
    console.log('error', e);
  }
}

const filePath = path.join(__dirname, 'README.md');

fs.readFile(filePath, (err, data) => {
  if(!err) {
    testFunctionUpload(data);
  }
})
