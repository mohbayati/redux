import store from "./store";
import * as actions from "./actions";

store.dispatch(actions.addBug("bug1"));
store.dispatch(actions.addBug("bug2"));
store.dispatch(actions.removeBug(1));
store.dispatch(actions.resolveBug(2));
console.log(store.getState());
