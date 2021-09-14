const initialState = {
  todos: []
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-TODOS':
      return {
        ...state,
        todos: action.payload
      }
    default: return state;
  }
};