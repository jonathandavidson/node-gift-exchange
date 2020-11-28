const GiftExchange = require('./GiftExchange');

const config = {
  people: [
    {
      id: 1,
      name: 'Karen'
    },
    {
      id: 2,
      name: 'Jonathan'
    },
    {
      id: 3,
      name: 'Erica'
    },
    {
      id: 4,
      name: 'Scott'
    },
    {
      id: 5,
      name: 'Melinda'
    },
    {
      id: 6,
      name: 'Edie'
    },
    {
      id: 7,
      name: 'Eric'
    },
    {
      id: 8,
      name: 'Kremena'
    },
    {
      id: 9,
      name: 'Austin'
    },
    {
      id: 10,
      name: 'Natalia'
    },
    {
      id: 11,
      name: 'Madison'
    },
    {
      id: 12,
      name: 'E2'
    },
    {
      id: 13,
      name: 'Gabby'
    },
    {
      id: 14,
      name: 'Nick'
    }
  ],

  restrictions: [
    {
      buyerId: 1,
      recipientId: 7
    },
    {
      buyerId: 1,
      recipientId: 8
    },
    {
      buyerId: 1,
      recipientId: 13
    },
    {
      buyerId: 1,
      recipientId: 14
    },
    {
      buyerId: 1,
      recipientId: 9
    },
    {
      buyerId: 1,
      recipientId: 10
    },
    {
      buyerId: 1,
      recipientId: 11
    },
    {
      buyerId: 1,
      recipientId: 12
    },
    {
      buyerId: 7,
      recipientId: 1
    },
    {
      buyerId: 8,
      recipientId: 1
    },
    {
      buyerId: 13,
      recipientId: 1
    },
    {
      buyerId: 14,
      recipientId: 1
    },
    {
      buyerId: 2,
      recipientId: 3
    },
    {
      buyerId: 2,
      recipientId: 4
    },
    {
      buyerId: 2,
      recipientId: 5
    },
    {
      buyerId: 3,
      recipientId: 2
    },
    {
      buyerId: 3,
      recipientId: 4
    },
    {
      buyerId: 3,
      recipientId: 5
    },
    {
      buyerId: 4,
      recipientId: 5
    },
    {
      buyerId: 4,
      recipientId: 3
    },
    {
      buyerId: 4,
      recipientId: 2
    },
    {
      buyerId: 5,
      recipientId: 4
    },
    {
      buyerId: 5,
      recipientId: 3
    },
    {
      buyerId: 5,
      recipientId: 2
    },
    {
      buyerId: 7,
      recipientId: 8
    },
    {
      buyerId: 7,
      recipientId: 9
    },
    {
      buyerId: 7,
      recipientId: 10
    },
    {
      buyerId: 7,
      recipientId: 11
    },
    {
      buyerId: 7,
      recipientId: 12
    },
    {
      buyerId: 7,
      recipientId: 13
    },
    {
      buyerId: 7,
      recipientId: 14
    },
    {
      buyerId: 8,
      recipientId: 7
    },
    {
      buyerId: 8,
      recipientId: 9
    },
    {
      buyerId: 8,
      recipientId: 10
    },
    {
      buyerId: 8,
      recipientId: 11
    },
    {
      buyerId: 8,
      recipientId: 12
    },
    {
      buyerId: 8,
      recipientId: 13
    },
    {
      buyerId: 8,
      recipientId: 14
    },
    {
      buyerId: 9,
      recipientId: 10
    },
    {
      buyerId: 9,
      recipientId: 1
    },
    {
      buyerId: 9,
      recipientId: 7
    },
    {
      buyerId: 9,
      recipientId: 8
    },
    {
      buyerId: 10,
      recipientId: 9
    },
    {
      buyerId: 10,
      recipientId: 1
    },
    {
      buyerId: 10,
      recipientId: 7
    },
    {
      buyerId: 10,
      recipientId: 8
    },
    {
      buyerId: 11,
      recipientId: 12
    },
    {
      buyerId: 11,
      recipientId: 1
    },
    {
      buyerId: 11,
      recipientId: 7
    },
    {
      buyerId: 11,
      recipientId: 8
    },
    {
      buyerId: 12,
      recipientId: 11
    },
    {
      buyerId: 12,
      recipientId: 1
    },
    {
      buyerId: 12,
      recipientId: 7
    },
    {
      buyerId: 12,
      recipientId: 8
    },
    {
      buyerId: 13,
      recipientId: 7
    },
    {
      buyerId: 13,
      recipientId: 8
    },
    {
      buyerId: 14,
      recipientId: 7
    },
    {
      buyerId: 13,
      recipientId: 8
    }
  ]
};

const giftExchange = new GiftExchange(config);
giftExchange.logResults();
