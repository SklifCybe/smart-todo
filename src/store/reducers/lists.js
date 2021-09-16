const initialState = {
  lists: [],
  activeList: 'Задачи'
};

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-LISTS':
      return {
        ...state,
        lists: action.payload
      };
    case 'SET-ACTIVE-LIST':
      return {
        ...state,
        activeList: action.payload
      };
    default: return state;
  }
};