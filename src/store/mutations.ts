import { MutationTree } from 'vuex';
import State from './state';

const mutations: MutationTree<State> = {
    toggleMenu(state: State) {
      state.menuOpen = !state.menuOpen;
    },
    removePlans(state: State) {
      state.plans = [];
    },
    // color(state: State, newColor: string): void {
    // 	state.color = newColor;
    // }
  };

export default mutations;
