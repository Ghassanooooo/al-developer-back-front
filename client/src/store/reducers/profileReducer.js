import * as actionType from "../actions/actionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case actionType.FETCH_PROFILE:
      return action.payload;

    default:
      return state;
  }
};
