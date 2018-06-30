const rideOffers = [
  {
    id: 1,
    name: 'Bonny Way',
    from: 'Lagos',
    to: 'Owerri',
    seats: 4,
    price: 7500,
    driver: 'Chike Obi',
    takeOff: '7pm',
    createdAt: new Date(),
  },
  {
    id: 2,
    name: 'ABC Transport',
    from: 'Lagos',
    to: 'Jos',
    seats: 54,
    price: 8600,
    driver: 'Shola Adebola',
    takeOff: '5pm',
    createdAt: new Date(),
  },
  {
    id: 3,
    name: 'GIG Motors',
    from: 'Owerri',
    to: 'Lagos',
    seats: 4,
    price: 7500,
    driver: 'Oscar Will',
    passengers: ['Love', 'Peace', 'Grace', 'Forgiveness'],
    takeOff: '8pm',
    createdAt: new Date(),
  },
];

export default rideOffers;
