import {ISectionModel, ISectionRequest} from '../../model/sections.model';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ISectionsState {
  sectionsList: ISectionModel[];
}

const initialState: ISectionsState = {
  sectionsList: [],
};

export const sectionSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    setSectionsList: (state:ISectionsState, action: PayloadAction<ISectionRequest>) => {
      state.sectionsList = action.payload.data;
    }
  }
});
export const {setSectionsList} = sectionSlice.actions;
