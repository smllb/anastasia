var fs   = require('fs');
const { cardsFolderPath } = require('../settings/paths.json')

let listAvailableCards = async () => {

    try {
      let cards = await fs.promises.readdir(cardsFolderPath);
      return cards;

    } catch (err) {
      console.error(err);
      return [];

    }
    
  };

let listCards = async () => {
    cards =  await listAvailableCards();
    console.log(cards)
    
}
listCards()
module.exports = {
    cardsFolderPath, listAvailableCards
}