import React from 'react';

export const TodoDetails = ({ todo, closeHandle }) => {
  const onClose = () => {
    closeHandle();
  };

  return (
    <aside className="todo-details">
      <h5>Детали задачи</h5>
      <i className="material-icons icons" onClick={onClose}>
        close
      </i>
      <span>{todo.title}</span>
    </aside>
  );
};
