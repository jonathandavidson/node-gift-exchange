const { ModuleKind, ModuleResolutionKind } = require("typescript");

class GiftExchange {
  constructor(config) {
    this.people = config.people;
    this.restrictions = config.restrictions;
  }

  logResults() {
    console.log('logging results');
  }
};

module.exports = GiftExchange;
