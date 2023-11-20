import * as actionTypes from "../action/type";
export const tabReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.TOGGLETabs:
      return action.selected;

    default:
      return state;
  }
};
