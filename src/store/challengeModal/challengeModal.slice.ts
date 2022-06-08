import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAppState } from '../index';

interface IChallengeModalState {
  challengeId: number | null;
  isOpen: boolean;
}

const initialState: IChallengeModalState = {
  challengeId: null,
  isOpen: false,
};

export const challengeModalSlice = createSlice({
  name: 'challengeModal',
  initialState,
  reducers: {
    openChallengeModal: (state: IChallengeModalState, action: PayloadAction<number>) => {
      state.isOpen = true;
      state.challengeId = action.payload;
    },
    closeChallengeModal: (state: IChallengeModalState) => {
      state.isOpen = false;
      state.challengeId = null;
    }
  },
});

export const challengeModalSelector = (state: TAppState) => state.challengeModal;
export const challengeModalActions = challengeModalSlice.actions;
