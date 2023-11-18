import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { todoReducers } from "./reducer/todoReducers";
const reducer = combineReducers({
  todos: todoReducers,
});
const middleWare = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);
export default store;
