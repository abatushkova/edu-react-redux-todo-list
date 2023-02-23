import React from 'react';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { TodoItem } from '../Todo/Todo';
import { RootState } from '../../app/store';
import { clearTodos, selectTodos, Todo } from '../../reducers/todosSlice';
import { selectFilter, VisibilityFilter } from '../../reducers/filtersSlice';
import './TodoList.scss';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilter) => {
  switch(filter) {
    case VisibilityFilter.ShowAll:
      return todos;
    case VisibilityFilter.ShowActive:
      return todos.filter(todo => !todo.completed);
    case VisibilityFilter.ShowCompleted:
      return todos.filter(todo => todo.completed);
  }
};

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = getVisibleTodos(useTypedSelector(selectTodos), useTypedSelector(selectFilter));

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
