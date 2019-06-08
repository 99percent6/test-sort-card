/**
* Sort cards and build instructions
*
* @param {array} props - array of objects travel card. Possible fields for each object - departure(string), destination(string),
* number(string), seat(string), baggage(string), additionalInfo(object).
* @returns {string}
*/

class SortCard {
  constructor (props) {
    this.cards = props;
    this.instructions = [];
  }

  getAdapter (type) {
    const adapter = require(`./${type}.js`);
    return adapter;
  }

  getInstructions () {
    this.sortCards();
    return this.instructions.join('\n');
  }

  sortCards () {
    const cards = this.cards;
    let sortCards = [];
    let firstCard = this.findFirstCard(cards);
    sortCards = [firstCard];
    
    for (let i = 0; i < cards.length; i++) {
      const currentCard = sortCards[i];
      const nextStep = cards.find(card => card.departure === currentCard.destination);
      if (nextStep) {
        sortCards = [...sortCards, nextStep];
        this.updateInstructions(nextStep);
      } else {
        break;
      }
    }
  }

  findFirstCard (cards) {
    let firstCard = null;

    for (let i = 0; i < cards.length; i++) {
      const currentCard = cards[i];
      const prevStep = cards.find(card => card.destination === currentCard.departure);
      if (!prevStep) {
        firstCard = currentCard;
        this.updateInstructions(currentCard);
        break;
      }
    }

    return firstCard;
  }

  updateInstructions (card) {
    const Adapter = this.getAdapter(card.transport);
    const transport = new Adapter(card);
    const instruction = transport.buildInstruction();
    this.instructions = [...this.instructions, instruction];
  }
}

module.exports = SortCard;