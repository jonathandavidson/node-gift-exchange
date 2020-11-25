const GiftExchange = require('./GiftExchange');

const config = {
  people: [],
  restrictions: []
};

const giftExchange = new GiftExchange(config);
giftExchange.logResults();
