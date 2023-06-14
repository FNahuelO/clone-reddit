import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trending: [],
  post: [],
};

export const data = createSlice({
  name: "data",
  initialState,
  reducers: {
    trending: (state, action) => {
      state.trending = action.payload;
    },
    post: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { trending, post } = data.actions;
