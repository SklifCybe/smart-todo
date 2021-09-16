import React from 'react';

export const TodoForm = ({ onSumbit }) => {
  const [title, setTitle] = React.useState('');

  const enterTodo = (event) => {
    if (event.code !== 'Enter') {
      return;
    }

    onSumbit(title);

    setTitle('');
  };

  const handleChange = ({ target }) => {
    setTitle(target.value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input type="text" value={title} onChange={handleChange} onKeyPress={enterTodo} />
        <label htmlFor="password">Задача</label>
      </div>
    </div>
  );
};
