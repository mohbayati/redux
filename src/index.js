import { apiCallBegin } from "./store/api";
import {
  addingBug,
  assigningToUser,
  loadBugs,
  resolivingBug,
} from "./store/bugs";
import configureStore from "./store/configureStore";
const store = configureStore();

store.dispatch(loadBugs());
setTimeout(() => {
  store.dispatch(assigningToUser(1, 4));
}, 2000);
// store.dispatch(
//   addingBug({
//     discription: "a",
//   })
// );
