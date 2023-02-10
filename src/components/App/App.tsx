import React from 'react';
import { AddTodo } from '../AddTodo/AddTodo';
import { FilterList } from '../FilterList/FilterList';
import { TodoList } from '../TodoList/TodoList';
import './App.scss';

const App = () => {
  return (
    <div className="hero">
      <h1 className="headline">Do ToDo</h1>
      <AddTodo />
      <FilterList />
      <TodoList />
    </div>
  );
}

export default App;
