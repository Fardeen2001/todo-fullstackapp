import * as actionTypes from "../action/type";
export const authReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_USER:
      return [...state, action.payload];
    case actionTypes.LOGIN_USER:
      return action.payload;

    default:
      return state;
  }
};
