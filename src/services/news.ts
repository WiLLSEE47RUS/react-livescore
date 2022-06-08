import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { INewsModel, TFetchNews } from '../model/news.model';


export const NEWSAPI = createApi({
  reducerPath: 'NEWS_API',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/v2/',
  }),
  endpoints: (builder) => ({
    getNews: builder.query<TFetchNews<INewsModel>, string>({
      query: (q) => ({
        url:'top-headlines',
        params: { q, country: 'ru', pageSize:30 , category: 'sports', apiKey: '7f2791e2360a4917b836537a869d3e7b'}
      }),
    }),
  }),
});

export const { useGetNewsQuery, } = NEWSAPI;
