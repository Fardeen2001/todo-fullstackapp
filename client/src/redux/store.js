import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { todoReducers } from "./reducer/todoReducers";
import { tabReducer } from "./reducer/tabReducer";
import { authReducer } from "./reducer/authReducer";
const reducer = combineReducers({
  todos: todoReducers,
  currentTab: tabReducer,
  auth: authReducer,
});
const middleWare = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);
export default store;
