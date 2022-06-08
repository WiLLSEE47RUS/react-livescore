import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAppState } from '../index';

interface ITeamModalState {
  teamId: number | null;
  isOpen: boolean;
}

const initialState: ITeamModalState = {
  teamId: null,
  isOpen: false,
};

export const teamModalSlice = createSlice({
  name: 'playerModal',
  initialState,
  reducers: {
    openChallengeModal: (state: ITeamModalState, action: PayloadAction<number>) => {
      state.isOpen = true;
      state.teamId = action.payload;
    },
    closeChallengeModal: (state: ITeamModalState) => {
      state.isOpen = false;
      state.teamId = null;
    }
  },
});

export const teamModalSelector = (state: TAppState) => state.teamModal;
export const teamModalActions = teamModalSlice.actions;
