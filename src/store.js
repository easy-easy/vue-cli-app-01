/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import { userInput } from "./modules/userInput";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    userInput
  }
});
