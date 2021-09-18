import React from 'react';
import { useSelector } from 'react-redux';

import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';
import { useApiDb } from '../hooks/api';
import { TodoDetails } from './TodoDetails';

export const TodoList = ({ match }) => {
  const [selectedTodo, setSelectedTodo] = React.useState(null);
  const todos = useSelector(({ todo }) => todo.todos);
  const lists = useSelector(({ list }) => list);
  const apiDb = useApiDb();

  const onSumbit = async (title) => {
    await apiDb.appendTodo({ listId: match.params.list, title });
  };

  const selectHandler = (todo) => {
    setSelectedTodo(todo);
  };

  const closeHandle = () => {
    setSelectedTodo(null);
  };

  return (
    <>
      <main className="todo">
        <h4 className="todo__title">{lists.activeList}</h4>
        <ul className="collection">
          {todos.map((todo) =>
            todo.listId === match.params.list ? (
              <TodoItem selectHandler={selectHandler} key={todo.id} todo={todo} />
            ) : null,
          )}
        </ul>
        <TodoForm onSumbit={onSumbit} />
      </main>
      {selectedTodo && <TodoDetails todo={selectedTodo} closeHandle={closeHandle} />}
    </>
  );
};
