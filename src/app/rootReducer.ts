import { combineReducers } from "@reduxjs/toolkit";
import { todosReducer } from "../reducers/todosSlice";
import { filtersReducer } from "../reducers/filtersSlice";

export const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});
