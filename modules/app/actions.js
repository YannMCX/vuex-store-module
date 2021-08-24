import * as types from "./mutations.types";

export default {
  resetState({ commit }) {
    commit(types.RESET_STATE);
  },

  init({ dispatch }) {
    dispatch("setLoading", true);

    // Do some functionnality, like connect to websocket server for back-end communication
    // or get user profiles, API data etc...
    dispatch("setLocale", "fr");

    // Application is initialized, data is retrieved
    // Disabling loading state
    dispatch("setLoading", false);
  },

  setLocale({ commit }, locale) {
    // No verification of data here, it must be done before
    commit(types.APP_LOCALE, locale);
  },

  setLoading({ commit }, isLoading) {
    // Add a global loading indicator to the app
    commit(types.APP_LOADING, isLoading);
  },
};
