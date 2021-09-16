export const setTodos = ((todo) => ({ type: 'SET-TODOS', payload: todo }))

export const addTodo = ((todo) => ({ type: 'ADD-TODO', payload: todo }));

export const toggleTodo = ((todo) => ({ type: 'TOGGLE-TODO', payload: todo }));

export const deleteTodo = ((id) => ({ type: 'DELETE_TODO', payload: id }));