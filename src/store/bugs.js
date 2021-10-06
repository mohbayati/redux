import { createAction, createReducer } from "@reduxjs/toolkit";

//actions
export const addBug = createAction("addBug");
export const removeBug = createAction("removeBug");
export const resolveBug = createAction("resolveBug");

// reducer
let lastId = 0;
export default createReducer([], {
  [addBug.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      resolve: false,
      description: action.payload.description,
    });
  },
  [removeBug.type]: (bugs, action) =>
    bugs.filter((bug) => bug.id !== action.payload.id),
  [resolveBug.type]: (bugs, action) =>
    bugs.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, resolve: true }
    ),
});
