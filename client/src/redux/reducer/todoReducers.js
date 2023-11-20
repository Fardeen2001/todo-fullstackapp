import * as actionTypes from "../action/type";
export const todoReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.AddNewToDo:
      return [action.payload, ...state];
    case actionTypes.GETALLToDo:
      return action.payload;
    case actionTypes.TOGGLEToDo:
      return state.map((item) =>
        item._id === action.payload._id ? { ...item, done: !item.done } : item
      );
    case actionTypes.UPDATEToDo:
      return state.map((item) =>
        item._id === action.payload._id
          ? { ...item, data: action.payload.data }
          : item
      );
    case actionTypes.DELETEToDo:
      return state.filter((item) => item._id !== action.payload._id);
    default:
      return state;
  }
};
