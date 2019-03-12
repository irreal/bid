import Period from '@/Models/Period.ts';
import PlanItem from '@/Models/planItem.ts';

interface Plan {
    period: Period;
    items: PlanItem[];
}

export default Plan;
