import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';
import { addTodo } from '../store/actions/todos';
import { useApiDb } from '../hooks/api';

export const TodoList = ({ match }) => {
  const dispatch = useDispatch();
  const todos = useSelector(({ todo }) => todo.todos);
  const lists = useSelector(({ list }) => list);
  const apiDb = useApiDb();

  const onSumbit = async (title) => {
    const newTodo = await apiDb.addTodo({ listId: match.params.list, title });

    // if you wanna quickly add new todo, you can swap this strings

    dispatch(addTodo(newTodo));
  };

  return (
    <main className="todo">
      <h4 className="todo__title">{lists.activeList}</h4>
      <ul className="collection">
        {todos.map((todo) =>
          todo.listId === match.params.list ? <TodoItem key={todo.id} todo={todo} /> : null,
        )}
      </ul>
      <TodoForm onSumbit={onSumbit} />
    </main>
  );
};
