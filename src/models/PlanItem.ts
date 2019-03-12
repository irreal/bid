import Item from '@/Models/Item.ts';
import Customer from '@/Models/Customer.ts';

interface PlanItem {
    item: Item;
    planPrice?: number;
    amount: number;
    customer: Customer;
}

export default PlanItem;
