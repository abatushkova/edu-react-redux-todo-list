import React, { FormEvent, useState } from 'react';
import './AddTodo.scss';

export const AddTodo = () => {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.length) return;

    setText('');
  }

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
