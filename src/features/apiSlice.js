import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://news-2p18.onrender.com/api/" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/articles",
    }),
    getArticle: builder.query({
      query: (id) => `articles/${id}`,
    }),
    getComments: builder.query({
      query: (id) => `articles/${id}/comments`,
    }),
    postVote: builder.mutation({
      // ? We gonna have to do some thinking here. Little diffiult :()
      query: ( article_id, incVotes ) => ({
        url: `/articles/${article_id}`,
        method: "PATCH",
        body: { inc_votes: incVotes },
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetArticleQuery,
  useGetCommentsQuery,
  usePostVoteMutation,
} = apiSlice;
