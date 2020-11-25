const GiftExchange = require('./GiftExchange');

const config = {
  people: [
    {
      id: 1,
      name: 'Jonathan'
    },
    {
      id: 2,
      name: 'Erica'
    }
  ],

  restrictions: []
};

const giftExchange = new GiftExchange(config);
giftExchange.logResults();
