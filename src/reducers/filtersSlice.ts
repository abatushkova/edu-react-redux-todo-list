import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export enum VisibilityFilter {
  ShowAll = 'SHOW_ALL',
  ShowActive = 'SHOW_ACTIVE',
  ShowCompleted = 'SHOW_COMPLETED',
}

const initialState = VisibilityFilter.ShowAll;

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setVisibilityFilter(
      state,
      action: PayloadAction<VisibilityFilter>
    ) {
      return action.payload;
    }
  }
});

export const { setVisibilityFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const selectFilter = (state: RootState) => state.filters;
