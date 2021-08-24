import Vue from "vue";
import Vuex from "vuex";
import router from "@/router/index.js";

// Modules
import modules from "./modules";

Vue.use(Vuex);
Vuex.Store.prototype.$router = router;

// With that prototype, in the store we can do "this.$router.push({ name: 'routename' })"

export default new Vuex.Store({
  modules,
});
