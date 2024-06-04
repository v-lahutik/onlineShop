export const initialState = {
  items: [],
  user: {
    isLoggedIn: false,
  },
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      console.log("ADD_ITEM action called");
      return {
        ...state,
        items: [...state.items, action.item],
      };

    case "REMOVE_Item":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };

    default:
      return state;
  }
}
