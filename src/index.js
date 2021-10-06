import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
const store = configureStore();

store.dispatch(actions.addBug({ description: "bug2" }));
store.dispatch(actions.addBug({ description: "bug2" }));
store.dispatch(actions.removeBug({ id: 1 }));
store.dispatch(actions.resolveBug({ id: 2 }));
console.log(store.getState());

// Build costum
// import store from "./customStore";
// import * as actions from "./actions";
// store.subscribe(() => {
//   console.log("store changed!");
// });
// store.dispatch(actions.addBug("bug1"));

// console.log(store.getState());
