import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { db } from '../firebase';

import { setLists } from '../store/actions/lists';
import { addTodo, deleteTodo, setTodos, toggleTodo } from '../store/actions/todos';

export const useApiDb = () => {
  const dispatch = useDispatch();

  const getLists = useCallback(async () => {
    try {
      const snapshot = await db.collection('lists').get();

      const lists = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch(setLists(lists));
    } catch (err) {
      console.error(err);
    }
  }, [dispatch]);

  const getTodos = useCallback(async () => {
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
  }, [dispatch]);

  const appendTodo = useCallback(
    async (data) => {
      try {
        dispatch(
          addTodo({
            id: Date.now(),
            ...data,
          }),
        );

        await db.collection('todos').add({ completed: false, ...data });
        await getTodos();
      } catch (err) {
        console.error(err);
      }
    },
    [dispatch, getTodos],
  );

  const toggleCompletedTodo = useCallback(
    async (todo) => {
      try {
        dispatch(toggleTodo(todo.id));

        await db.collection('todos').doc(todo.id).update({
          completed: todo.completed,
        });
      } catch (err) {
        console.error(err);
      }
    },
    [dispatch],
  );

  const removeTodo = useCallback(
    async (id) => {
      try {
        dispatch(deleteTodo(id));
        await db.collection('todos').doc(id).delete();
      } catch (err) {
        console.error(err);
      }
    },
    [dispatch],
  );

  return { getLists, getTodos, appendTodo, toggleCompletedTodo, removeTodo };
};
