import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAppState } from '../index';

interface IPlayerModalState {
  playerId: number | null;
  isOpen: boolean;
}

const initialState: IPlayerModalState = {
  playerId: null,
  isOpen: false,
};

export const playerModalSlice = createSlice({
  name: 'playerModal',
  initialState,
  reducers: {
    openChallengeModal: (state: IPlayerModalState, action: PayloadAction<number>) => {
      state.isOpen = true;
      state.playerId = action.payload;
    },
    closeChallengeModal: (state: IPlayerModalState) => {
      state.isOpen = false;
      state.playerId = null;
    }
  },
});

export const playerModalSelector = (state: TAppState) => state.playerModal;
export const playerModalActions = playerModalSlice.actions;
