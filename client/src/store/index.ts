import Vue from "vue";
import Vuex from "vuex";
import { TaskItem } from "../schema";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: Array<TaskItem>(),
    count: 0
  },
  mutations: {
    addTodo(state, task: string) {
      state.tasks.push({ id: state.count++, task });
    },
    removeTodo(state, id: number) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    }
  },
  actions: {
    addTodo(context, task: string) {
      context.commit("addTodo", task);
    },
    removeTodo(context, id: number) {
      context.commit("removeTodo", id);
    }
  },
  modules: {}
});
