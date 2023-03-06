const FleekStorage = require('@fleekhq/fleek-storage-js')
const fleekStorage = new FleekStorage({
  apiKey: 'yourApiKey',
  apiSecret: 'yourApiSecret',
  bucket: 'yourBucketName',
})

// Vérifier si le répertoire existe et le créer s'il n'existe pas
const directoryPath = 'path/to/directory'
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
const filePath = 'path/to/file'
const fileData = 'Contenu du fichier à télécharger'
fleekStorage.upload(filePath, fileData).then(result => {
  if (result.error) {
    console.error(result.error)
  } else {
    console.log(`Fichier ${filePath} téléchargé avec succès`)
  }
})