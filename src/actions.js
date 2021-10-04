import * as actions from "./actionType";

export function addBug(description) {
  return {
    type: actions.Add_Bug,
    payload: {
      description,
    },
  };
}

export function removeBug(id) {
  return {
    type: actions.Remove_Bug,
    payload: {
      id,
    },
  };
}

export const resolveBug = (id) => {
  return {
    type: actions.Resolve_Bug,
    payload: {
      id,
    },
  };
};
