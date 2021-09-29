import { db } from '../../firebase';

export const setTodos = (todo) => ({ type: 'SET-TODOS', payload: todo });

export const addTodo = (todo) => ({ type: 'ADD-TODO', payload: todo });

export const toggleTodo = (todo) => ({ type: 'TOGGLE-TODO', payload: todo });

export const deleteTodo = (id) => ({ type: 'DELETE_TODO', payload: id });

export const getTodos = () => async (dispatch) => {
  try {
    const snapshot = await db.collection('todos').get();

    const todos = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    dispatch(setTodos(todos));
  } catch (err) {
    console.error(err);
  }
};

export const appendTodo = (data) => async (dispatch) => {
  try {
    dispatch(
      addTodo({
        id: Date.now(),
        ...data,
      }),
    );

    await db.collection('todos').add({ completed: false, ...data });
  } catch (err) {
    console.error(err);
  }
};

export const toggleTodoThunk = (todo) => async (dispatch) => {
  try {
    dispatch(toggleTodo(todo.id));

    await db.collection('todos').doc(todo.id).update({
      completed: todo.completed,
    });
  } catch (err) {
    console.error(err);
  }
};

export const removeTodo = (id) => async (dispatch) => {
  try {
    dispatch(deleteTodo(id));
    await db.collection('todos').doc(id).delete();
  } catch (err) {
    console.error(err);
  }
};
