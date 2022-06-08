import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { sportTypeSlice } from './sportTypes/sportTypes.slice';
import { API } from '../services/api';
import { eventsSlice } from './events/events.slice';
import { eventModalSlice } from './eventModal/eventModal.slice';
import { challengeModalSlice } from './challengeModal/challengeModal.slice';
import { playerModalSlice } from './playerModal/playerModal.slice';
import { teamModalSlice } from './teamModal/teamModal.slice';
import { NEWSAPI } from '../services/news';

export const store = configureStore({
  reducer: {
    sportTypes: sportTypeSlice.reducer,
    events: eventsSlice.reducer,
    eventModal: eventModalSlice.reducer,
    challengeModal: challengeModalSlice.reducer,
    playerModal: playerModalSlice.reducer,
    teamModal: teamModalSlice.reducer,
    [API.reducerPath]: API.reducer,
    [NEWSAPI.reducerPath]: NEWSAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware).concat(NEWSAPI.middleware),
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;
