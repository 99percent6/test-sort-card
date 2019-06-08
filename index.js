const SortCard = require('./helpers/sortCard');

const cards = [
  {
    departure: 'Madrid',
    destination: 'Paris',
    transport: 'bus',
    number: 'PAR11',
    seat: '35',
    baggage: null
  },
  {
    departure: 'Moscow',
    destination: 'Madrid',
    transport: 'plane',
    number: 'AC456',
    additionalInfo: {
      gate: { label: 'gate', value: '3A' },
      business: { label: 'business', value: 'yes' }
    },
    seat: '12C',
    baggage: '2 suitcase'
  },
  {
    departure: 'Paris',
    destination: 'Amsterdam',
    transport: 'bus',
    number: 'AMS55',
    seat: null,
    baggage: null
  },
  {
    departure: 'Samara',
    destination: 'Moscow',
    transport: 'train',
    number: 'MSC12',
    additionalInfo: {
      railwayCarriage: { label: 'railway carriege', value: '5' }
    },
    seat: '34A',
    baggage: '1 suitcase'
  }
]

const sortedCards = new SortCard(cards);
const instructions = sortedCards.getInstructions();
console.log('---instructions---\n', instructions);