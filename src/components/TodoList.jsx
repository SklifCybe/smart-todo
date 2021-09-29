import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';
import { TodoDetails } from './TodoDetails';
import { appendTodo } from '../store/actions/todos';

export const TodoList = ({ match }) => {
  const [selectedTodo, setSelectedTodo] = React.useState(null);
  const dispatch = useDispatch();
  const todos = useSelector(({ todo }) => todo.todos);
  const lists = useSelector(({ list }) => list);

  const onSumbit = async (title) => {
    dispatch(appendTodo({ listId: match.params.list, title }));
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
