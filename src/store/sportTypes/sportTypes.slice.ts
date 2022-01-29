import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ISportModel, ISportPayload} from '../../model/sport.model';

interface ISportTypesState {
  sportTypes: ISportModel[];
}

const initialState: ISportTypesState = {
  sportTypes: [],
};

export const sportTypeSlice = createSlice({
  name: 'sportTypes',
  initialState,
  reducers: {
    setSportTypes: (state:ISportTypesState, action: PayloadAction<ISportPayload>) => {
      state.sportTypes = action.payload.data;
    }
  }
});
export const {setSportTypes} = sportTypeSlice.actions;
