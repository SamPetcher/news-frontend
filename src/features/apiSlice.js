import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://news-2p18.onrender.com/api/" }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/articles',
    }),
    getArticle: builder.query({
      query: (id) => `articles/${id}`,
    }),
   getComments: builder.query({
      query: (id) => `articles/${id}/comments`,
    }),
  })
})

export const { useGetPostsQuery, useGetArticleQuery, useGetCommentsQuery, } = apiSlice