import { MutationTree } from 'vuex';
import State from './state';

const mutations: MutationTree<State> = {
    removePlans(state: State) {
      state.plans = [];
    },
    // color(state: State, newColor: string): void {
    // 	state.color = newColor;
    // }
  };

export default mutations;
