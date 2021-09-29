import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoThunk } from '../store/actions/todos';


export const TodoItem = ({ todo, selectHandler }) => {
  const dispatch = useDispatch();

  const todoCheckHandler = async () => {
    dispatch(toggleTodoThunk(todo));
  };

  const deleteHandler = async (event) => {
    event.preventDefault();
    if (window.confirm('Вы действительно хотите удалить задачу?')) {
      dispatch(removeTodo(todo.id));
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
