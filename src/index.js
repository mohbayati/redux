import configureStore from "./store/configureStore";
import { addProject } from "./store/projects";
import { getUnresolvedBugs, addBug, removeBug, resolveBug } from "./store/bugs";
const store = configureStore();

store.dispatch(addBug({ description: "bug2" }));
store.dispatch(addBug({ description: "bug2" }));
//store.dispatch(removeBug({ id: 1 }));
store.dispatch(resolveBug({ id: 2 }));
store.dispatch(addProject({ id: 1, name: "project1" }));
console.log(store.getState());
const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());
console.log(x === y);

// Build costum
// import store from "./customStore";
// import * as actions from "./actions";
// store.subscribe(() => {
//   console.log("store changed!");
// });
// store.dispatch(actions.addBug("bug1"));

// console.log(store.getState());
