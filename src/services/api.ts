import { ISectionModel } from '../model/sections.model';
import { baseURL } from './rest';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TFetchedData } from '../model/common.model';
import { IEvent } from '../model/events.model';
import { IGetEventsBySportIdParams } from '../model/api.model';
import { EventsViewModes } from '../constants/events.constants';
import { ILineupModel } from '../model/lineup.model';

export const API = createApi({
  reducerPath: 'API',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: headers => {
      headers.set('x-rapidapi-host', 'sportscore1.p.rapidapi.com');
      headers.set('x-rapidapi-key', 'e352b9bf2bmshfcf8a7ebfc9c18bp1ef310jsn8a066fce1f30');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSectionsBySportId: builder.query<TFetchedData<ISectionModel[]>, number>({
      query: (id) => `/sports/${id}/sections`,
    }),
    getEventsBySportId: builder.query<TFetchedData<IEvent[]>, IGetEventsBySportIdParams>({
      query: ({ id, mode, date }) => `/sports/${id}/events${mode === EventsViewModes.ALL ?( '/date/' + date) : '/live'}`,
    }),
    getEventDataById: builder.query<TFetchedData<IEvent>, number | null>({
      query: (id) => `/events/${String(id)}`,
    }),
    getEventLineupsById: builder.query<TFetchedData<ILineupModel[]>, number | null>({
      query: (id) => `/events/${String(id)}/lineups`,
    }),
  }),
});

export const {
  useGetSectionsBySportIdQuery,
  useGetEventsBySportIdQuery,
  useGetEventDataByIdQuery,
  useGetEventLineupsByIdQuery,
} = API;

