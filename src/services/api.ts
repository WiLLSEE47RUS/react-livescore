import { ISectionModel } from '../model/sections.model';
import { baseURL } from './rest';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TFetchedData } from '../model/common.model';
import { IEvent } from '../model/events.model';
import { IGetEventsBySportIdParams } from '../model/api.model';
import { EventsViewModes } from '../constants/events.constants';
import { ILineupModel } from '../model/lineup.model';
import { IStatisticsModel } from '../model/statistics.model';
import { IIncidentsModel } from '../model/incidents.model';
import { ILeague, ISeason, ISeasonTable } from '../model/league.model';
import { IPlayerModel } from '../model/player.model';
import { ITeam } from '../model/team.model';

export const API = createApi({
  reducerPath: 'API',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: headers => {
      headers.set('x-rapidapi-host', 'sportscore1.p.rapidapi.com');
      headers.set('x-rapidapi-key', 'fcf0f94828mshe4442eea88a7d01p15a177jsn1344e9c69c0e');
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
    getChallengeDataById: builder.query<TFetchedData<ILeague>, number | null>({
      query: (id) => `/leagues/${String(id)}`,
    }),
    getH2HEvents: builder.query<TFetchedData<IEvent[]>, { homeTeam: number, awayTeam: number }>({
      query: ({ homeTeam, awayTeam }) => `/teams/${String(homeTeam)}/h2h-events/${String(awayTeam)}`,
    }),
    getEventLineupsById: builder.query<TFetchedData<ILineupModel[]>, number | null>({
      query: (id) => `/events/${String(id)}/lineups`,
    }),
    getEventIncidentsById: builder.query<TFetchedData<IIncidentsModel[]>, number | null>({
      query: (id) => `/events/${String(id)}/incidents`,
    }),
    getEventStatisticsById: builder.query<TFetchedData<IStatisticsModel[]>, number | null>({
      query: (id) => `/events/${String(id)}/statistics`,
    }),
    getSeasonsByLeagueId: builder.query<TFetchedData<ISeason[]>, number | null>({
      query: (id) => `/leagues/${String(id)}/seasons`,
    }),
    getSeasonsTableById: builder.query<TFetchedData<ISeasonTable[]>, number | null>({
      query: (id) => `/seasons/${String(id)}/standings-tables`,
    }),
    getSeasonsEventsById: builder.query<TFetchedData<IEvent[]>, number | null>({
      query: (id) => `/seasons/${String(id)}/events`,
    }),
    getTeamDataById: builder.query<TFetchedData<ITeam>, number | null>({
      query: (id) => `/teams/${String(id)}`,
    }),
    getTeamEventsById: builder.query<TFetchedData<IEvent[]>, number | null>({
      query: (id) => `/teams/${String(id)}/events`,
    }),
    getTeamLineupsById: builder.query<TFetchedData<ILineupModel[]>, number | null>({
      query: (id) => `/teams/${String(id)}/lineups`,
    }),
    getPlayerDataById: builder.query<TFetchedData<IPlayerModel>, number | null>({
      query: (id) => `/players/${String(id)}`,
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
  useGetEventIncidentsByIdQuery,
  useGetChallengeDataByIdQuery,
  useGetSeasonsByLeagueIdQuery,
  useGetSeasonsTableByIdQuery,
  useGetSeasonsEventsByIdQuery,
  useGetTeamDataByIdQuery,
  useGetTeamEventsByIdQuery,
  useGetTeamLineupsByIdQuery,
  useGetPlayerDataByIdQuery,
} = API;

