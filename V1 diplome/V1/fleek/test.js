
  const fs = require('fs');
  const fleekStorage = require('@fleekhq/fleek-storage-js'); 
  const path = require('path');

const addFilesandGetURI = async(apiKey,apiSecret) =>{




  const filePath = 'C:/Users/cedric/Documents/GitHub/NFT_Project_Diplome/V1 diplome/V1/fleek/test.pdf';
  const filePathJSON = 'C:/Users/cedric/Documents/GitHub/NFT_Project_Diplome/V1 diplome/V1/fleek/test.json';
  const NOM_PRENOM = "MOLEGNANA_JULIE";
  const directoryPath = `/TEST/${NOM_PRENOM}3/`;
  

  
  // Créez le dossier parent s'il n'existe pas
  try {
      await fleekStorage.upload({
          apiKey,
          apiSecret,
          key: directoryPath,
          data: Buffer.from(''),
      });
  } catch (error) {
      console.error(`Erreur lors de la création du dossier parent : ${error}`);
  }

  const fileData = fs.readFileSync(filePath);
  const fileDataJSON = fs.readFileSync(filePathJSON);

  const uploadedFile = await fleekStorage.upload({
      apiKey,
      apiSecret,
      key: `/TEST/${NOM_PRENOM}2/${path.basename(filePath)}`,
      data: fileData,
  });

  const URI_Diplome = await fleekStorage.get({
      apiKey,
      apiSecret,
      key: `/TEST/${NOM_PRENOM}2/${path.basename(filePath)}`,
      getOptions: ['publicUrl'],
  });

  const contenuJSON = JSON.parse(fileDataJSON);
  contenuJSON.uri = URI_Diplome;
  const nouveauJSON = JSON.stringify(contenuJSON);

  const uploadedFileJSON = await fleekStorage.upload({
      apiKey,
      apiSecret,
      key: `/TEST/${NOM_PRENOM}3/${path.basename(filePathJSON)}`,
      data: nouveauJSON,
  });

  const URI_JSON = await fleekStorage.get({
      apiKey,
      apiSecret,
      key: `/TEST/${NOM_PRENOM}3/${path.basename(filePathJSON)}`,
      getOptions: ['publicUrl'],
  });

  return URI_JSON;
};

addFilesandGetURI('tEgyrrlCPoVt4cu1i4Qlxw==', 'xbcWexeLICXxIns6zMXic9PNNbEoBXBi13LlC14zvLI=')
  .then((URI) => console.log(`URI du fichier JSON : ${URI}`))
  .catch((error) => console.error(`Erreur : ${error}`));



