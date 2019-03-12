import Item from '@/models/Item';
import Customer from '@/models/Customer';

interface PlanItem {
    item: Item;
    planPrice?: number;
    amount: number;
    customer: Customer;
}

export default PlanItem;
