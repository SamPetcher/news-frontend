import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://news-2p18.onrender.com/api/" }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/articles'
    })
  })
})

export const { useGetPostsQuery } = apiSlice




