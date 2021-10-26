import INITIAL_STATE from "./state";

import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAIL } from "./types";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        searchSuccess: false,
        error: null,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        searchSuccess: true,
      };
    case SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        searchSuccess: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
