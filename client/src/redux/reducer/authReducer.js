import * as actionTypes from "../action/type";
export const authReducer = (state = { token: null }, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_USER:
      return { ...state, ...action.payload };
    case actionTypes.LOGIN_USER:
      console.log(action.payload);
      return { ...state, token: action.payload };

    default:
      return state;
  }
};
