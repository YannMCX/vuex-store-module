import * as types from "./mutations.types";
import { getDefaultState } from "./state";

export default {
  [types.RESET_STATE](state) {
    Object.assign(state, getDefaultState());
  },

  [types.APP_LOADING](state, status) {
    state.loading = status;
  },

  [types.APP_LOCALE](state, locale) {
    state.locale = locale;
  },
};
