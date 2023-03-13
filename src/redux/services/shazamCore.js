import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/',
    prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '08471df831msh4eedbf497ae9298p182fc1jsnca5abc71924a');
        return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'charts/track' }),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;