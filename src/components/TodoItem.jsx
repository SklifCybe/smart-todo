import React from 'react';

export const TodoItem = ({ todo }) => {
  const [check, setCheck] = React.useState(false);

  const handleTodoCheck = (event) => {
    setCheck(event.target.checked);
  };

  return (
    <li className="collection-item todo__item" key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={handleTodoCheck} />
        <span className="todo__text">{todo.title}</span>
      </label>
    </li>
  );
};
