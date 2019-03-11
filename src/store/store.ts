import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import State from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';



Vue.use(Vuex);

export default new Store<State>({
  state: new State(),
  mutations,
  actions,
  getters,
});
