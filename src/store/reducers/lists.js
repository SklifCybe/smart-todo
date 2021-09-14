const initialState = {
  lists: []
};

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-LISTS':
      return {
        ...state,
        lists: action.payload
      }
    default: return state;
  }
};