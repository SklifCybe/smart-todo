import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Drawer } from './components/Drawer';
import { TodoList } from './components/TodoList';

import { useApiDb } from './hooks/api';
import { setTodos } from './store/actions/todos';
import { setLists } from './store/actions/lists';

function App() {
  const { getCollection } = useApiDb();
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      const lists = await getCollection('lists');
      const todos = await getCollection('todos');

      dispatch(setLists(lists));
      dispatch(setTodos(todos));
    })();
  }, []);

  return (
    <div className="wrapper">
      <Drawer />
      <Route path="/:listId" component={TodoList} />
    </div>
  );
}

export default App;
