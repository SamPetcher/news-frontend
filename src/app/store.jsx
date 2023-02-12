import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/postsSlice"
import { apiSlice } from "../features/apiSlice";
export default configureStore({
  reducer: {
    posts: postsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})
