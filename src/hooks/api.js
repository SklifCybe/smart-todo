import { useCallback } from 'react';
import { db } from '../firebase';

export const useApiDb = () => {

  const getCollection = useCallback((collection) => {
    return db.collection(collection)
      .get()
      .then((snapshot) => {
        const obj = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        return obj;
      })
      .catch((err) => {
        console.error(err);
      })
  }, [db]);

  const addTodo = useCallback((data) => {
    return db.collection('todos')
      .add({
        completed: false,
        ...data
      })
      .then((docRef) => docRef.get())
      .then((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
  }, [db]);

  const toggleCompletedTodo = useCallback((todo) => {
    db.collection('todos').doc(todo.id).update({
      completed: !todo.completed
    }).catch((err) => {
      console.error(err);
    })
  }, [db]);

  const deleteTodo = useCallback((id) => {
    db.collection('todos')
      .doc(id)
      .delete()
      .catch((err) => {
        console.error(err);
      })
  }, [db])


  return { getCollection, addTodo, toggleCompletedTodo, deleteTodo };
};