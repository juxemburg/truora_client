import Vue from 'vue';
import Vuex from 'vuex';
import { initialState } from './initial-state';
import { actions } from './actions';
import { mutations } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: initialState,
  mutations: mutations,
  actions: actions,
  modules: {},
});
