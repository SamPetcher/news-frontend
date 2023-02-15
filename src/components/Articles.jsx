import Loader from "./Loader"
import React, { useState } from 'react';
import { useGetPostsQuery } from '../features/apiSlice'

function Articles() {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery();

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  let content
  if (isLoading) content = <Loader />
  else if (isError) content = error
  else if (isSuccess) content = data.articles.map(post => (
    <div key={post.id}>
      <h1 className="font-sans text-lg  font-semibold">{post.title}</h1>
      <a className="font-mono text-slate-500">{post.author}</a>
      <a className="font-mono text-slate-500">{
        new Date(post.created_at).toString().slice(0, 24)
      }</a>
    </div>
  ))

  return (
    <div>
      {content}
    </div>
  );
}

export default Articles;