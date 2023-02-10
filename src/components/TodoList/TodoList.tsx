import React from 'react';
import { Todo } from '../Todo/Todo';
import './TodoList.scss';

export const TodoList = () => {
  const handleCLearAllClick = () => {
  };

  return (
    <ul className="todo-list">
      {/* {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
      {tasks.length > 0 && (
        <button
          type="button"
          className="task-list__button"
          onClick={handleCLearAllClick}
        >Clear All</button>
      )} */}
    </ul>
  );
}
