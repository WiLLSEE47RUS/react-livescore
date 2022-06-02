import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IEventsState {
  searchValue: string;
  selectedSectionId: number | null;
}

const initialState: IEventsState = {
  searchValue: '',
  selectedSectionId: null,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setSearchValue: (state: IEventsState, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSelectedSection: (state: IEventsState, action: PayloadAction<null | number>) => {
      state.selectedSectionId = action.payload;
    },
  },
});

export const { setSearchValue, setSelectedSection } = eventsSlice.actions;
