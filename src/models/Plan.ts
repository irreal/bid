import Period from '@/Models/Period';
import PlanItem from '@/Models/planItem';

interface Plan {
    period: Period;
    items: PlanItem[];
}

export default Plan;
