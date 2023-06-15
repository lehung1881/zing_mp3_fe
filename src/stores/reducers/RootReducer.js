import appReducer from "./AppReducer";
import { combineReducers, applyMiddleware } from "redux";

const rootReducer = combineReducers({
  app: appReducer,
  song: null
});

export default rootReducer;