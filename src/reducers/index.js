import counterReducer from "./counterReducer";
import rootReducer from "./rootReducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counter: counterReducer,
  rootReducer: rootReducer
});

export default allReducer;
