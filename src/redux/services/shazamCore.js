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
    getSongDetails: builder.query({ query: ({ songid }) => `songs/get-details?key=${songid}&locale=en-US` }),
    getSongRelated: builder.query({ query: ({ songid }) => `songs/get-related-artist?id=${songid}&l=en-US` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;