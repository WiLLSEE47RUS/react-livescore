import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IEventsState {
  searchValue: string;
}

const initialState: IEventsState = {
  searchValue: '',
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setSearchValue: (state: IEventsState, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});
export const { setSearchValue } = eventsSlice.actions;
