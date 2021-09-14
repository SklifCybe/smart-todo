import React from 'react';
import { useSelector } from 'react-redux';

export const TodoList = ({ match }) => {
  const todos = useSelector(({ todo }) => todo.todos);

  return (
    <ul className="todos">
      {todos.map((todo) => {
        if (todo.listId == match.params.listId) return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};
