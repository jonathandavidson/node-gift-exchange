const { ModuleKind, ModuleResolutionKind } = require("typescript");

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
    console.log('picking names');
    this.results = [
      {
        giverId: 1,
        recipientId: 2
      },
      {
        giverId: 2,
        recipientId: 1
      }
    ]
  }

  logResults() {
    console.log('logging results');
    this.results.forEach((result) => {
      const giver = this.people.find(person => result.giverId === person.id);
      const recipient = this.people.find(person => result.recipientId === person.id);
      console.log(`${giver.name} buys for ${recipient.name}`);
    });
  }

};

module.exports = GiftExchange;
