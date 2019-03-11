import Period from './Period';
import PlanItem from './planItem';

interface Plan {
    period: Period;
    items: PlanItem[];
}

export default Plan;
