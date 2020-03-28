import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState, FormData } from "./types";

Vue.use(Vuex);
Vue.config.devtools = true;

const store: StoreOptions<RootState> = {
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, payload: FormData) {
      state.todos = [payload, ...state.todos];
    }
  },
  actions: {
    addTodo({ commit }, payload) {
      commit("addTodo", payload);
    }
  },
  modules: {}
};

export default new Vuex.Store<RootState>(store);
