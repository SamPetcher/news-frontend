import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: 1, title: "hey you", content: "amibguous" },
  { id: 2, title: "hey you", content: "amibguous" },
  { id: 3, title: "hey you", content: "amibguous" },
  { id: 4, title: "hey you", content: "amibguous" },
]
const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
})
export default postSlice.reducer;
