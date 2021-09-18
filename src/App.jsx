import React from 'react';
import { Route } from 'react-router-dom';

import { Drawer } from './components/Drawer';
import { TodoList } from './components/TodoList';

import { useApiDb } from './hooks/api';

function App() {
  const { getLists, getTodos } = useApiDb();

  React.useEffect(() => {
    Promise.all([getTodos(), getLists()]);
  }, [getTodos, getLists]);

  return (
    <div className="wrapper">
      <Drawer />
      <Route exact path={['/', '/:list']} component={TodoList} />
    </div>
  );
}

export default App;
