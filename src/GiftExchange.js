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
    const results = this.people.map((buyer) => {
      const recipientIndex = available.findIndex(
        potentialRecipient => buyer.id !== potentialRecipient.id
      );
  
      let recipient;
      if (recipientIndex < 0) {
        recipient = available.pop();
      } else {
        recipient = available.splice(recipientIndex, 1)[0];
      }
  
      return {
        buyerId: buyer.id,
        recipientId: recipient.id
      };
    });
  
    const lastItem = results[results.length - 1];
  
    if (lastItem.buyerId === lastItem.recipientId) {
      const randomIndex = Math.floor(Math.random() * (results.length - 2));
      const temp = results[randomIndex].recipientId;
      results[randomIndex].recipientId = results[results.length - 1].recipientId;
      results[results.length - 1].recipientId = temp;
    }

    this.results = results;
  }

  logResults() {
    this.results.forEach((result) => {
      const giver = this.people.find(person => result.giverId === person.id);
      const recipient = this.people.find(person => result.recipientId === person.id);
      console.log(`${giver.name} buys for ${recipient.name}`);
    });
  }

};

module.exports = GiftExchange;
