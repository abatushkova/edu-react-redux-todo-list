import React from 'react';
import { Filter } from '../Filter/Filter';
import './FilterList.scss';

export const FilterList = () => {
  return (
    <div className="filter-list">
      <span className="filter-list__title">Show:</span>
      <Filter filter="SHOW_ALL">All</Filter>
      <Filter filter="SHOW_ACTIVE">Active</Filter>
      <Filter filter="SHOW_COMPLETED">Completed</Filter>
    </div>
  )
}
