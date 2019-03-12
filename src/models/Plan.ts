import Period from '@/models/Period';
import PlanItem from '@/models/PlanItem';

interface Plan {
    period: Period;
    items: PlanItem[];
}

export default Plan;
