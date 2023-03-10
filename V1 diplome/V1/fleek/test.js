const FleekStorage = require('@fleekhq/fleek-storage-js')
const fleekStorage = new FleekStorage({
  apiKey: 'tEgyrrlCPoVt4cu1i4Qlxw==',
  apiSecret: 'xbcWexeLICXxIns6zMXic9PNNbEoBXBi13LlC14zvLI=',
  bucket: 'beb5b9bc-bfee-4668-93d7-616ebab1a730',
})

// Vérifier si le répertoire existe et le créer s'il n'existe pas
const directoryPath = '/nom_prenom'
fleekStorage.listDirectory(directoryPath).then(result => {
  if (result.error) {
    fleekStorage.createDirectory(directoryPath).then(result => {
      if (result.error) {
        console.error(result.error)
      } else {
        console.log(`Répertoire ${directoryPath} créé avec succès`)
      }
    })
  }
})

// Télécharger un fichier dans le répertoire
const filePath = '/nom_prenom/intro.txt'
const fileData = 'Contenu du fichier à télécharger'
fleekStorage.upload(filePath, fileData).then(result => {
  if (result.error) {
    console.error(result.error)
  } else {
    console.log(`Fichier ${filePath} téléchargé avec succès`)
  }
})