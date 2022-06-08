import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { sportTypeSlice } from './sportTypes/sportTypes.slice';
import { API } from '../services/api';
import { eventsSlice } from './events/events.slice';
import { eventModalSlice } from './eventModal/eventModal.slice';
import { challengeModalSlice } from './challengeModal/challengeModal.slice';


export const store = configureStore({
  reducer: {
    sportTypes: sportTypeSlice.reducer,
    events: eventsSlice.reducer,
    eventModal: eventModalSlice.reducer,
    challengeModal: challengeModalSlice.reducer,
    [API.reducerPath]: API.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(API.middleware),
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;
