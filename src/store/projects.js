import { createSlice } from "@reduxjs/toolkit";

const store = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    addProject: (projects, action) => {
      projects.push({
        id: action.payload.id,
        name: action.payload.name,
      });
    },
  },
});

export const { addProject } = store.actions;
export default store.reducer;
