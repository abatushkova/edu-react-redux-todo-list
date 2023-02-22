import React from 'react';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { TodoItem } from '../Todo/Todo';
import { clearTodos, selectTodos } from '../../reducers/todosSlice';
import { RootState } from '../../app/store';
import './TodoList.scss';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useTypedSelector(selectTodos);

  const handleCLearAllClick = () => {
    dispatch(
      clearTodos({
        list: []
      })
    );
  };

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      {todos.length > 0 && (
        <button
          type="button"
          className="todo-list__button"
          onClick={handleCLearAllClick}
        >Clear All</button>
      )}
    </ul>
  );
}
