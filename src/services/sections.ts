import {ISectionModel, ISectionPayload, ISectionRequest} from '../model/sections.model';
import {ApiVersion} from '../constants/api.constants';
import {baseURL, restGet} from './rest';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TFetchedData} from '../model/common.model';

export const getSectionsList = async (params: ISectionPayload): Promise<ISectionRequest> => {
  const response = await restGet(`${ApiVersion.Sections}`, {params});
  return response.data as ISectionRequest;
};


export const sectionsApi = createApi({
  reducerPath: 'sectionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: headers => {
      headers.set('x-rapidapi-host', 'sportscore1.p.rapidapi.com');
      headers.set('x-rapidapi-key', '6288613dd3msha86578bf731ee12p163163jsn613e83c122df');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getSectionsBySportId: builder.query<TFetchedData<ISectionModel[]>, number>({
      query: (id) => `/sports/${id}/sections`
    })
  }),
});

export const {useGetSectionsBySportIdQuery} = sectionsApi;
