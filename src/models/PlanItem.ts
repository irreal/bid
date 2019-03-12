import Item from '@/Models/Item';
import Customer from '@/Models/Customer';

interface PlanItem {
    item: Item;
    planPrice?: number;
    amount: number;
    customer: Customer;
}

export default PlanItem;
