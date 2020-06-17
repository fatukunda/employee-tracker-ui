import { combineReducers } from "redux";
import userReducer from "./userReducer";
import employeeReducer from "./employeeReducer";

const rootReducer = combineReducers({
  userReducer,
  employeeReducer,
});

export default rootReducer;
