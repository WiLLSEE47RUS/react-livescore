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
      headers.set('x-rapidapi-key', '6288613dd3msha86578bf731ee12p163163jsn613e83c122df');
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
  }),
});

export const { useGetSectionsBySportIdQuery, useGetEventsBySportIdQuery } = API;
