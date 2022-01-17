import { AnyAction, configureStore, Dispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import {sectionSlice} from './sections/sections.slice';


export const store = configureStore({
  reducer: {
    sections: sectionSlice.reducer,
  },
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
export const useAppDispatch = (): Dispatch<AnyAction> => useDispatch<TAppDispatch>();
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;
