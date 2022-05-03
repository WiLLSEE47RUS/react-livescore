import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {sportTypeSlice} from './sportTypes/sportTypes.slice';
import {API} from '../services/api';


export const store = configureStore({
  reducer: {
    sportTypes: sportTypeSlice.reducer,
    [API.reducerPath]: API.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(API.middleware)
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;
