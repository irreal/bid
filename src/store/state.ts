import Plans from '@/mockData/Plans';
import Plan from '@/models/Plan';

export default class State {

    public plans: Plan[];

    constructor() {
        this.plans = Plans;
    }
}







