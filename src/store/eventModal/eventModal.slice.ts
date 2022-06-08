import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAppState } from '../index';

interface IEventModalState {
  eventId: number | null;
  isOpen: boolean;
}

const initialState: IEventModalState = {
  eventId: null,
  isOpen: false,
};

export const eventModalSlice = createSlice({
  name: 'eventModal',
  initialState,
  reducers: {
    openEventModal: (state: IEventModalState, action: PayloadAction<number>) => {
      state.isOpen = true;
      state.eventId = action.payload;
    },
    closeEventModal: (state: IEventModalState) => {
      state.isOpen = false;
      state.eventId = null;
    }
  },
});

export const eventModalSelector = (state: TAppState) => state.eventModal;
export const eventModalActions = eventModalSlice.actions;
