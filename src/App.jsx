import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Drawer } from './components/Drawer';
import { TodoList } from './components/TodoList';
import { getLists } from './store/actions/lists';
import { getTodos } from './store/actions/todos';


function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    Promise.all([dispatch(getTodos()), dispatch(getLists())]);
  }, [getTodos, getLists]);

  return (
    <div className="wrapper">
      <Drawer />
      <Route exact path={['/', '/:list']} component={TodoList} />
    </div>
  );
}

export default App;
