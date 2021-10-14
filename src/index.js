import { apiCallBegin } from "./store/api";
import { loadBugs } from "./store/bugs";
import configureStore from "./store/configureStore";
const store = configureStore();
//store.dispatch(loadBugs);
store.dispatch(loadBugs());
