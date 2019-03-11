import { GetterTree } from 'vuex';
import State from './state';
import Plan from '@/models/plan';

const getters: GetterTree<State, State> = {
    plans(state: State): Plan[] {
      return state.plans;
    },
    // colour(state: State): string {
    // 	return state.color;
    // },
  };

export default getters;
