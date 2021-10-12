import configureStore from "./store/configureStore";
import { addProject } from "./store/projects";
import {
  getUnresolvedBugs,
  addBug,
  removeBug,
  resolveBug,
  assignToUser,
  getBugsByUser,
} from "./store/bugs";
import { addUser } from "./store/users";
const store = configureStore();

store.dispatch(addBug({ description: "bug2" }));
store.dispatch(addBug({ description: "bug2" }));
//store.dispatch(removeBug({ id: 1 }));
store.dispatch(resolveBug({ id: 2 }));
store.dispatch(addProject({ id: 1, name: "project1" }));

// const x = getUnresolvedBugs(store.getState());
// const y = getUnresolvedBugs(store.getState());
// console.log(x === y);

store.dispatch(addUser({ name: "user1" }));
store.dispatch(
  assignToUser({
    id: 1,
    userId: 1,
  })
);
const assigned = getBugsByUser(1)(store.getState());
console.log(store.getState());
console.log(assigned);
// Build costum
// import store from "./customStore";
// import * as actions from "./actions";
// store.subscribe(() => {
//   console.log("store changed!");
// });
// store.dispatch(actions.addBug("bug1"));

// console.log(store.getState());
