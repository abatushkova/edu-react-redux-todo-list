import React from 'react';
import './Filter.scss';

interface IProps {
  filter: string;
  children: React.ReactNode;
}

export const Filter = (props: IProps) => {
  const { children, filter } = props;
  const handleFilterClick = () => {
    // dispatch({
    //   type: 'SET_VISIBILITY_FILTER',
    //   filter
    // });
  };

  return (
    <button
      type="button"
      className="filter"
      onClick={handleFilterClick}
    >
      {children}
    </button>
  )
}
