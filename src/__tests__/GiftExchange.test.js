const GiftExchange = require("../GiftExchange");

describe("GiftExchange", () => {
  
    describe("when two people are provided", () => {
      const people = makePeople(2);
      testValidExchange(people);
    });
  
    describe("when three people are provided", () => {
      const people = makePeople(3);
      testValidExchange(people);
    });
  
    describe("when ten people are provided", () => {
      const people = makePeople(10);
      testValidExchange(people);
    });

    describe("when there are restrictions", () => {
      const people = makePeople(3);
      const restrictions = [
        { buyerId: 1, recipientId: 3 },
        { buyerId: 2, recipientId: 1 },
        { buyerId: 3, recipientId: 2 }
      ];
      testValidExchange(people, restrictions);
    });
  });
  
  function testValidExchange(people, restrictions = []) {
    const exchanges = [];
    for (let i = 0; i < 50; i++) {
      const exchange = new GiftExchange({ people, restrictions });
      exchanges.push(exchange);
    }
  
    it("everyone gets exactly one gift", () => {
      testEveryoneGetsOneGift(people, exchanges);
    });
  
    it("no one buys for themsleves", () => {
      testNoOneBuysForThemselves(exchanges);
    });

    it("honors the restrictions", () => {
      testRestrictionsAreHonored(exchanges);
    });
  }

  function testNoOneBuysForThemselves(exchanges) {
    exchanges.forEach(exchange => {
      exchange.results.forEach(association => {
        expect(association.person).not.toEqual(association.recipientId);
      });
    });
  }
  
  function testEveryoneGetsOneGift(people, exchanges) {
    exchanges.forEach(exchange => {
      expect(exchange.results.length).toBe(people.length);
  
      people.forEach(person => {
        expect(
          exchange.results.some(association => association.recipientId === person.id)
        ).toBe(true);
      });
    });
  }
  
  function testRestrictionsAreHonored(exchanges) {
    exchanges.forEach(exchange => {
      exchange.restrictions.forEach(restriction => {
        const violation = exchange.results.some(result => {
          return result.giverId === restriction.giverId && result.recipientId === restriction.recipientId;
        });
        expect(violation).toBe(false);
      });
    });
  }

  function makePeople(quantity) {
    const people = [];
  
    for (let i = 1; i < quantity + 1; i++) {
      people.push({
        id: i,
        name: `person-${i}`
      });
    }
  
    return people;
  }