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
    case 'ADD-TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case 'TOGGLE-TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
            return todo;
          }
          return todo;
        })
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      }
    default: return state;
  }
};