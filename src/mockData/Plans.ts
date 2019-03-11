import Plan from '@/models/plan';
import Period from '@/models/Period';
import Customer from '@/models/Customer';
import Item from '@/models/Item';
import UnitOfMeasure from '@/models/UnitOfMeasure';

const customers: Customer[] = [
  {
    name: 'Drvolux',
    id: '1',
    associate: 'Slaviša Petrović',
  },
];

const items: Item[] = [
    {
        id: '1',
        name: 'Iverica Bela 42mm',
        price: 3.44,
        unitOfMeasure: UnitOfMeasure.m2,
        tags: ['Oplemenjena Iverica'],
    },
];

const Plans: Plan[] = [
  {
    period: Period.Quarter,
    items: [{
        item: items[0],
        customer: customers[0],
        amount: 500,
    }],
  },
];

export default Plans;
