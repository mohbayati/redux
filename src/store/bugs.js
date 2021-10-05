// action type
const Remove_Bug = "removeBug";
const Add_Bug = "addBug";
const Resolve_Bug = "resolveBug";

//actions
export function addBug(description) {
  return {
    type: Add_Bug,
    payload: {
      description,
    },
  };
}

export function removeBug(id) {
  return {
    type: Remove_Bug,
    payload: {
      id,
    },
  };
}

export const resolveBug = (id) => {
  return {
    type: Resolve_Bug,
    payload: {
      id,
    },
  };
};

// reducer
let lastId = 0;
export default function reducer(state = [], action) {
  if (action.type === Add_Bug) {
    return [
      ...state,
      {
        id: ++lastId,
        resolve: false,
        description: action.payload.description,
      },
    ];
  } else if (action.type === Remove_Bug) {
    return state.filter((bug) => bug.id !== action.payload.id);
  } else if (action.type === Resolve_Bug) {
    return state.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, resolve: true }
    );
  }
  return state;
}
