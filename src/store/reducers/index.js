import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";

const rootReducer = combineReducers({
  employeeReducer,
});

export default rootReducer;