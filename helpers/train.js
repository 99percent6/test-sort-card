/**
* Build instructions for one travel card
*
* @param {object} props - Travel card with possible fileds - departure(string), destination(string),
* number(string), seat(string), baggage(string), additionalInfo(object).
* @returns {string}
*/

class Train {
  constructor (props) {
    this.card = props;
    this.template = {
      departure: 'From {{departure}} ',
      number: 'take train {{number}}. ',
      destination: 'to {{destination}} ',
      seat: 'Seat {{seat}}. ',
      baggage: 'Baggage {{baggage}}. '
    }
  }

  buildInstruction () {
    let instruction = '';
    const card = this.card;

    for (let key in card) {
      if (this.template[key]) {
        instruction += this.template[key].replace(`{{${key}}}`, card[key] ? card[key] : ' - no assignment');
      }
    }

    if (card.additionalInfo && Object.keys(card.additionalInfo).length) {
      instruction += ` Additional information - `;
      let acc = [];
      for (let key in card.additionalInfo) {
        acc = [...acc, `${card.additionalInfo[key].label} ${card.additionalInfo[key].value}`];
      }
      instruction += `${acc.join(', ')}`;
    }

    return instruction;
  }
}
  
  module.exports = Train;