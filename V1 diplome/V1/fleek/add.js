
const addFilesToFleek = async (apiKey, apiSecret, directory) => {
  
  try {
    const fleekStorage = require('@fleekhq/fleek-storage-js');   
    const fs = require('fs');
    const filePath1 = 'V1 diplome/V1/fleek/test.pdf';
    const filePath2 = 'V1 diplome/V1/fleek/test.json';

    const file1 = fs.readFileSync(filePath1);
    const file2 = fs.readFileSync(filePath2);
    // Upload file1 and get its URI
    const file1UploadResult = await fleekStorage.upload({
      
      apiKey,
      apiSecret,
      key: `${directory}/${file1}`,
      data: file1,
    });
    const file1URI = file1UploadResult.publicUrl;

    const files = [
      { path: `${directory}/${file1}`, content: file1URI },
      { path: `${directory}/${file2}`, content: file2 },
    ];

    const result = await fleekStorage.upload({
      apiKey,
      apiSecret,
      key: directory,
      data: files,
    });

    // Update file2 with file1 URI
    const file2Index = files.findIndex(file => file.path === `${directory}/${file2}`);
    if (file2Index !== -1 && result.publicUrl) {
      files[file2Index].content = `${file1URI}/${directory}/${file1}`;
    } else {
      throw new Error(`Impossible de trouver le fichier ${file2} dans le résultat.`);
    }

    // Upload updated files and return URI of file2
    const updatedResult = await fleekStorage.upload({
      apiKey,
      apiSecret,
      key: directory,
      data: files,
    });

    return updatedResult.publicUrl ? `${updatedResult.publicUrl}/${directory}/${file2}` : '';
  } catch (error) {
    console.error('Erreur lors de l\'ajout des fichiers:', error);
    return '';
  }
};


  addFilesToFleek('tEgyrrlCPoVt4cu1i4Qlxw==', 'xbcWexeLICXxIns6zMXic9PNNbEoBXBi13LlC14zvLI=', 'TEST');
