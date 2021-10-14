import { createAction, createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { createSelector } from "reselect";
import { apiCallBegin } from "./api";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: { list: [], loading: false, lastFetch: null },
  reducers: {
    bugRequested(bugs, action) {
      bugs.loading = true;
    },
    bugReceived(bugs, action) {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },
    bugRequestFaild(bugs, action) {
      bugs.loading = false;
    },
    addBug(bugs, action) {
      bugs.list.push(action.payload);
    },
    removeBug: (bugs, action) =>
      bugs.list.filter((bug) => bug.id !== action.payload.id),
    resolveBug: (bugs, action) =>
      bugs.list.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolve: true }
      ),
    assignToUser: (bugs, action) => {
      return bugs.list.map((bug) =>
        bug.id !== action.payload.id
          ? bug
          : { ...bug, userId: action.payload.userId }
      );
    },
  },
});
export const {
  addBug,
  removeBug,
  resolveBug,
  assignToUser,
  bugReceived,
  bugRequested,
  bugRequestFaild,
} = slice.actions;
export default slice.reducer;

const url = "/bugs";

export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entites.bugs;
  const timeDiffer = moment().diff(moment(lastFetch), "seconds");
  console.log(timeDiffer);

  if (timeDiffer < 10) return;
  dispatch(
    apiCallBegin({
      url,
      onStart: bugRequested.type,
      onSuccess: bugReceived.type,
      onError: bugRequestFaild.type,
    })
  );
};
export const addingBug = (bug) =>
  apiCallBegin({
    url,
    method: "post",
    data: bug,
    onSuccess: addBug.type,
  });
//selector
export const getUnresolvedBugs = createSelector(
  (state) => state.entites.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolve)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entites.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
