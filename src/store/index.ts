import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import {sectionSlice} from './sections/sections.slice';
import {sportTypeSlice} from './sportTypes/sportTypes.slice';
import {sectionsApi} from '../services/sections';


export const store = configureStore({
  reducer: {
    sections: sectionSlice.reducer,
    sportTypes: sportTypeSlice.reducer,
    [sectionsApi.reducerPath]: sectionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sectionsApi.middleware)
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAppDispatch = () => useDispatch<TAppDispatch>();
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;
