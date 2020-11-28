function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

class GiftExchange {

  people = [];

  restrictions = [];

  results = [];

  constructor(config) {
    this.people = config.people;
    this.restrictions = config.restrictions;
    this.pickNames();
  }

  pickNames() {
    const available = shuffle(this.people.slice(0));
    let results = this.people.map(buyer => {
      const recipient = available.pop();
      return {
        buyerId: buyer.id,
        recipientId: recipient.id
      };
    });

    console.log(results);

    for (let i = 0; i < results.length; i++) {
      const buyerId = results[i].buyerId;
      const recipientId = results[i].recipientId;
      if (!this.isLegal(buyerId, recipientId)) {
        const swapIndex = results.findIndex(result => {
          return this.isLegal(result.buyerId, recipientId) && this.isLegal(buyerId, result.recipientId)
        });
        if (swapIndex >= 0) {
          const newRecipientId = results[swapIndex].recipientId;
          results[swapIndex].recipientId = results[i].recipientId;
          results[i].recipientId = newRecipientId;
        } else {
          throw 'Unable to find a solution';
        }
      }
    }

    this.results = results;
  }

  isLegal(buyerId, recipientId) {
    return buyerId !== recipientId &&
      !this.restrictions.some(restriction => {
        return restriction.buyerId === buyerId && restriction.recipientId === recipientId;
      });
  };

  logResults() {
    this.results.forEach((result) => {
      const giver = this.people.find(person => result.giverId === person.id);
      const recipient = this.people.find(person => result.recipientId === person.id);
      console.log(`${giver.name} buys for ${recipient.name}`);
    });
  }

};

module.exports = GiftExchange;
