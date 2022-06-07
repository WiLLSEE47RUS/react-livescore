import { ISectionModel } from '../model/sections.model';
import { baseURL } from './rest';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TFetchedData } from '../model/common.model';
import { IEvent } from '../model/events.model';
import { IGetEventsBySportIdParams } from '../model/api.model';
import { EventsViewModes } from '../constants/events.constants';
import { ILineupModel } from '../model/lineup.model';
import { IStatisticsModel } from '../model/statistics.model';

export const API = createApi({
  reducerPath: 'API',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: headers => {
      headers.set('x-rapidapi-host', 'sportscore1.p.rapidapi.com');
      headers.set('x-rapidapi-key', '309b3078f4mshfd8ebe60fa07d5ep1bbf5ejsn2af1e6f78228');
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
    getH2HEvents: builder.query<TFetchedData<IEvent[]>, { homeTeam: number, awayTeam: number }>({
      query: ({ homeTeam, awayTeam }) => `/teams/${String(homeTeam)}/h2h-events/${String(awayTeam)}`,
    }),
    getEventLineupsById: builder.query<TFetchedData<ILineupModel[]>, number | null>({
      query: (id) => `/events/${String(id)}/lineups`,
    }),
    getEventIncidentsById: builder.query<TFetchedData<ILineupModel[]>, number | null>({
      query: (id) => `/events/${String(id)}/incidents`,
    }),
    getEventStatisticsById: builder.query<TFetchedData<IStatisticsModel[]>, number | null>({
      query: (id) => `/events/${String(id)}/statistics`,
    }),
  }),
});

export const {
  useGetSectionsBySportIdQuery,
  useGetEventsBySportIdQuery,
  useGetEventDataByIdQuery,
  useGetEventLineupsByIdQuery,
  useGetH2HEventsQuery,
  useGetEventStatisticsByIdQuery,
} = API;

