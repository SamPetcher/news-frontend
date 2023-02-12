import Loader from "./Loader"
import React, { useState } from 'react';
import { useGetPostsQuery } from '../features/apiSlice'
function Articles() {
  // const [isLoading, setLoading] = useState(true);
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery()
  console.log(posts)
  return (
    (isLoading ?
      <Loader />
      :
      <div>Loaded</div>)
  )
}

export default Articles
