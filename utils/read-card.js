var exif = require('exiftool');
var fs   = require('fs');
const path = require('path');
const { cardsFolderPath } = require('../settings/paths.json')

let readCard = async (cardName) => {
  let cardPath = `${cardsFolderPath}/${cardName}`

  fs.readFile(cardPath, function (err, data) {
    if (err)
      throw err;
    else {
      exif.metadata(data, function (err, metadata) {
        if (err)
          throw err;
        else
        
        char = JSON.parse(atob(metadata.chara));
        console.log(char)
  
      });
    }
  });
}

module.exports = {
  readCard
}