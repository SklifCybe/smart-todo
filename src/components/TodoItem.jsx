import React from 'react';

import { useApiDb } from '../hooks/api';

export const TodoItem = ({ todo, selectHandler }) => {
  const apiDb = useApiDb();

  const todoCheckHandler = async () => {
    await apiDb.toggleCompletedTodo(todo);
  };

  const deleteHandler = async (event) => {
    event.preventDefault();
    if (window.confirm('Вы действительно хотите удалить задачу?')) {
      await apiDb.removeTodo(todo.id);
    }
  };

  const onSelect = () => {
    selectHandler(todo);
  };

  return (
    <li key={todo.id} className="collection-item todo__item">
      <label className="todo__item-checkbox">
        <input type="checkbox" checked={todo.completed} onChange={todoCheckHandler} />
        <span></span>
      </label>
      <span className="todo__text" onClick={onSelect}>
        {todo.title}
      </span>
      <i className="material-icons icons" onClick={deleteHandler}>
        delete_forever
      </i>
    </li>
  );
};
