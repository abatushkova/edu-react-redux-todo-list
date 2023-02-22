import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type TodoId = number;
export type Todo = {
  id: TodoId;
  text: string;
  completed: boolean;
}
type TodosState = {
  list: Todo[];
}

const initialState: TodosState = {
  list: []
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(
      state: TodosState,
      action: PayloadAction<Todo>
    ) {
      state.list.push(action.payload);
    },
    toggleTodo(
      state: TodosState,
      action: PayloadAction<TodoId>
    ) {
      let index = state.list.findIndex(({ id }) => id === action.payload);

      if (index !== undefined) {
        state.list[index].completed = !state.list[index].completed;
      }
    },
    deleteTodo(
      state: TodosState,
      action: PayloadAction<TodoId>
    ) {
      state.list = state.list.filter(({ id }) => id !== action.payload);
    },
    changeTodo(
      state: TodosState,
      action: PayloadAction<Todo>
    ) {
      const index = state.list.findIndex(({ id }) => id === action.payload.id);

      if (index !== undefined) {
        state.list[index].text = action.payload.text;
      }
    },
    clearTodos(
      state: TodosState,
      action: PayloadAction<TodosState>
    ) {
      return action.payload;
    }
  }
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  changeTodo,
  clearTodos
} = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
export const selectTodos = (state: RootState) => state.todos.list;
