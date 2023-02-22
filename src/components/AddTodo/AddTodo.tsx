import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../reducers/todosSlice';
import './AddTodo.scss';

export const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.length) return;

    dispatch(
      addTodo({
        id: Date.now(),
        text,
        completed: false,
      })
    );

    setText('');
  };

  return (
    <form className="field" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="field__input"
        placeholder="Add new to-do"
      />
      <button type="submit" className="field__button">+</button>
    </form>
  );
}
