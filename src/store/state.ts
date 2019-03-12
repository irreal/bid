import Plans from '@/mockData/Plans';
import Plan from '@/models/Plan';

export default class State {

    public menuOpen: boolean;
    public plans: Plan[];

    constructor() {
        this.plans = Plans;
        this.menuOpen = false;
    }
}







