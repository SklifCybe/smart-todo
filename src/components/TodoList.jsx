import React from 'react';
import { useSelector } from 'react-redux';

import { TodoItem } from './TodoItem';

export const TodoList = ({ match }) => {
  const todos = useSelector(({ todo }) => todo.todos);
  const lists = useSelector(({ list }) => list);

  return (
    <main className="todo">
      <h4 className="todo__title">{lists.activeList}</h4>
      <ul className="collection">
        {todos.map((todo) => (todo.listId === match.params.list ? <TodoItem todo={todo} /> : null))}
      </ul>
    </main>
  );
};
