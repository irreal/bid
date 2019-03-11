import Item from './Item';
import Customer from './Customer';

interface PlanItem {
    item: Item;
    planPrice?: number;
    amount: number;
    customer: Customer;
}

export default PlanItem;
