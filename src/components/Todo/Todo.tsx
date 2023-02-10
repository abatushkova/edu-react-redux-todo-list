import React, { ChangeEvent, useState } from 'react';
import './Todo.scss';

interface IPropsModel {
  // todo: TodoType;
}

export const Todo = () => {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;

  const handleToggle = () => {
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
  };

  if (isEditing) {
    todoContent = (
      <>
        <input
          type="text"
          // value={todo.text}
          onChange={handleInputChange}
          className="todo__input" />
        <button
          type="button"
          className="todo__button todo__button--save"
          onClick={handleSaveClick}
        >
          <span className="visually-hidden">Save</span>
          <span className="todo__icon">
            <svg className="todo__icon-body" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 416c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>
          </span>
        </button>
      </>
    )
  } else {
    todoContent = (
      <>
      {/* <p className="todo__text">{todo.text}</p> */}
      <button
        type="button"
        onClick={handleEditClick}
        className="todo__button todo__button--edit"
      >
        <span className="visually-hidden">Edit</span>
        <span className="todo__icon">
          <svg className="todo__icon-body" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
        </span>
      </button>
      </>
    )
  }
  return (
    <li className={`todo ${"todo.completed" ? "is-completed" : ""}`}>
      <button
        type="button"
        onClick={handleToggle}
        className="todo__button todo__button--complete"
      >
        <span className="visually-hidden">Complete</span>
        <span className="todo__icon">
          <svg className="todo__icon-body" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </span>
      </button>
      {todoContent}
      <button
        type="button"
        onClick={handleDeleteClick}
        className="todo__button todo__button--delete"
      >
        <span className="visually-hidden">Delete</span>
        <span className="todo__icon">
          <svg className="todo__icon-body" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </span>
      </button>
    </li>
  );
}
