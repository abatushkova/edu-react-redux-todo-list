const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id !== action.id)
          ? todo
          : {...todo, completed: !todo.completed}
      );
    case 'CHANGE_TODO':
      return state.map(todo =>
        (todo.id !== action.id)
          ? todo
          : {...todo, text: todo.text}
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

export default todos;
