import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://news-2p18.onrender.com/api/" }),
  tagTypes: ['Article'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/articles",
    }),
    getArticle: builder.query({
      query: (id) => `articles/${id}`,
      providesTags: ['Article'],
    }),
    getComments: builder.query({
      query: (id) => `articles/${id}/comments`,
    }),
    getTopics: builder.query({
      query: (id) => `/topics`,
    }),
    postVote: builder.mutation({
      // ? We gonna have to do some thinking here. Little diffiult :()
      query: (data) => ({
        url: `/articles/${data.id}`,
        method: "PATCH",
        body: { inc_votes: data.inc_votes },
      }),
      invalidatesTags: ['Article'],
    }),
    postComment: builder.mutation({
      query: (data) => ({
        url: `/articles/3/comments`,
        method: "POST",
        body: {username: "jessjelly", body: data},
      }), 
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetTopicsQuery,
  useGetArticleQuery,
  useGetCommentsQuery,
  usePostVoteMutation,
  usePostCommentMutation,
} = apiSlice;
