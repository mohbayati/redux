import { combineReducers } from "redux";
import entitesReducer from "./entities";

export default combineReducers({
  entites: entitesReducer,
});
