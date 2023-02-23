import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { selectFilter, setVisibilityFilter, VisibilityFilter } from '../../reducers/filtersSlice';
import './Filter.scss';

interface IProps {
  filter: VisibilityFilter;
  children: React.ReactNode;
}

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Filter = (props: IProps) => {
  const dispatch = useDispatch();
  const currentFilter = useTypedSelector(selectFilter);
  const { children, filter } = props;

  const handleFilterClick = () => {
    dispatch(
      setVisibilityFilter(filter)
    );
  };

  return (
    <button
      type="button"
      disabled={currentFilter === filter}
      className={`filter ${currentFilter === filter ? "is-active": ""}`}
      onClick={handleFilterClick}
    >
      {children}
    </button>
  )
}
