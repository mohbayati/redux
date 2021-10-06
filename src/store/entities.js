import { combineReducers } from "redux";
import bugreducer from "./bugs";
import projectreducer from "./projects";

export default combineReducers({
  bug: bugreducer,
  project: projectreducer,
});
