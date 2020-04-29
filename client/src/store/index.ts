import Vue from "vue";
import Vuex from "vuex";
import { TaskItem } from "../schema";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: Array<TaskItem>()
  },
  mutations: {
    addTodo(state, task: string) {
      fetch("http://localhost:8000/taskboard/add_task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ task })
      })
        .then(res => res.json())
        .then(data => (state.tasks = data));
    },
    removeTodo(state, id: number) {
      fetch("http://localhost:8000/taskboard/remove_task", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
      })
        .then(res => res.json())
        .then(data => (state.tasks = data));
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
