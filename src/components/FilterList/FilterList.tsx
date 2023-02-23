import React from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { VisibilityFilter } from '../../reducers/filtersSlice';
import { selectTodos } from '../../reducers/todosSlice';
import { Filter } from '../Filter/Filter';
import './FilterList.scss';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const FilterList = () => {
  const todos = useTypedSelector(selectTodos);

  return (
    <div className="filter-list">
      {todos.length > 0 && (
        <>
          <span className="filter-list__title">Show:</span>
          <Filter filter={VisibilityFilter.ShowAll}>All</Filter>
          <Filter filter={VisibilityFilter.ShowActive}>Active</Filter>
          <Filter filter={VisibilityFilter.ShowCompleted}>Completed</Filter>
        </>
      )}
    </div>
  )
}
