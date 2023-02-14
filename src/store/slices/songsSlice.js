import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // action type: song + / + 'addSong' ==> song/addSong
    addSong(state, action) {
      state.push(action.payload);
      // STATE IS NOT THE BIG STATE OBJECT IN THE
      // STORE, IT IS THE PIECE OF STATE MANAGED
      // BY THE REDUCER
    },

    // action type: song + / + 'removeSong' ==> song/removeSong
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
