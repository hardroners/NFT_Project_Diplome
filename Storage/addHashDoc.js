const fs = require('fs');
const crypto = require('crypto');
const FleekStorage = require('@fleekhq/fleek-storage-js');

// Chemin du fichier et du document JSON
const filePath = '/path/to/file';
const jsonPath = '/path/to/json';

// Lecture du fichier et du document JSON
const fileData = fs.readFileSync(filePath);
const jsonData = fs.readFileSync(jsonPath);

// Calcul du hash du fichier
const hash = crypto.createHash('sha256').update(fileData).digest('hex');

// Ajout du hash au document JSON
const jsonObj = JSON.parse(jsonData);
jsonObj.hash = hash;
const updatedJson = JSON.stringify(jsonObj);

// Téléversement du fichier et du document JSON sur Fleek
const fleekStorage = new FleekStorage({ apiKey: 'YOUR_API_KEY', apiSecret: 'YOUR_API_SECRET' });
const uploadedFile = await fleekStorage.upload({
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_API_SECRET',
  key: 'path/to/file',
  data: fileData,
});
const uploadedJson = await fleekStorage.upload({
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_API_SECRET',
  key: 'path/to/json',
  data: updatedJson,
});
