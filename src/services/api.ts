import { ISectionModel } from '../model/sections.model';
import { baseURL } from './rest';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TFetchedData } from '../model/common.model';
import { IEvent } from '../model/events.model';
import { IGetEventsBySportIdParams } from '../model/api.model';
import { EventsViewModes } from '../constants/events.constants';

export const API = createApi({
  reducerPath: 'API',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: headers => {
      headers.set('x-rapidapi-host', 'sportscore1.p.rapidapi.com');
      headers.set('x-rapidapi-key', 'f7c3c72c18msh967fd33ec16c0fbp18a933jsn6e9e2ea14099');
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
  }),
});

export const { useGetSectionsBySportIdQuery, useGetEventsBySportIdQuery, useGetEventDataByIdQuery } = API;
