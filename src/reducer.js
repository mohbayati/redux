import * as actions from "./actionType";
import store from "./store";

let lastId = 0;
export default function reducer(state = [], action) {
  if (action.type === actions.Add_Bug) {
    return [
      ...state,
      {
        id: ++lastId,
        resolve: false,
        description: action.payload.description,
      },
    ];
  } else if (action.type === actions.Remove_Bug) {
    return state.filter((bug) => bug.id !== action.payload.id);
  } else if (action.type === actions.Resolve_Bug) {
    return state.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, resolve: true }
    );
  }
  return state;
}
