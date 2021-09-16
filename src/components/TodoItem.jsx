import React from 'react';
import { useDispatch } from 'react-redux';

import { useApiDb } from '../hooks/api';
import { deleteTodo, toggleTodo } from '../store/actions/todos';

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const apiDb = useApiDb();

  const handleTodoCheck = (event) => {
    apiDb.toggleCompletedTodo(todo);

    dispatch(toggleTodo(todo.id));
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    if (window.confirm('Вы действительно хотите удолить задачу?')) {
      dispatch(deleteTodo(todo.id));
      apiDb.deleteTodo(todo.id);
    }
  };

  return (
    <li key={todo.id} className="collection-item">
      <label className="todo__item">
        <input type="checkbox" checked={todo.completed} onChange={handleTodoCheck} />
        <span className="todo__text">{todo.title}</span>
        <i className="material-icons todo__item-delete" onClick={deleteHandler}>
          delete_forever
        </i>
      </label>
    </li>
  );
};
