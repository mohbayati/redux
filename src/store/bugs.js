import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    addBug(bugs, action) {
      bugs.push({
        id: ++lastId,
        resolve: false,
        description: action.payload.description,
      });
    },
    removeBug: (bugs, action) =>
      bugs.filter((bug) => bug.id !== action.payload.id),
    resolveBug: (bugs, action) =>
      bugs.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolve: true }
      ),
  },
});
export const { addBug, removeBug, resolveBug } = slice.actions;
export default slice.reducer;

// export const getUnresolvedBugs = (state) =>
//   state.entites.bugs.filter((bug) => !bug.resolve);

export const getUnresolvedBugs = createSelector(
  (state) => state.entites.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolve)
);
