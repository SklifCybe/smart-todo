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
  }, []);


  return { getCollection };
};