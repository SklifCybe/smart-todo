import { db } from '../../firebase';

export const setLists = (list) => ({ type: 'SET-LISTS', payload: list });

export const setActiveLists = (list) => ({ type: 'SET-ACTIVE-LIST', payload: list });

export const getLists = () => async (dispatch) => {
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
};
