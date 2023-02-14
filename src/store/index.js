import { configureStore } from "@reduxjs/toolkit";

import { moviesReducer, addMovie, removeMovie } from "./slices/movieSlice";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { reset } from "./actions";

// The Store
const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
});

export { store, addMovie, removeMovie, addSong, removeSong, reset };

// For debugging purposes we can see the state
// in the store by useing store.getState() function
// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// To change the state we use dispatch function:
// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song"
// });
// it's best to write the dispatch function like this
// store.dispatch(songsSlice.actions.addSong("another new song!"));

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// Slices
// 1- Defines some initial state.
// 2- Combines 'mini-reducers' into a big reducer.
// 3- Creates a set of 'action creator' functions.

// Action Creators:
// Set of functions created for us automatically.
// When called, they return an action that we can dispatch
// Saves us from having to manually write out action objects

// Connecting React to Redux:
// 1- Export the 'store' from whatever file it is created in.
// 2- Import the store into the root 'index.js' file.
// 3- Import 'Provider' from the 'react-redux' library.
// 4- Wrap the App component with the Provider, pass the store to the Provider.

// Changing State:
// 1- Add a reducer to one of your slices that changes state in some particular way.
// 2- Export the action creator that the slice automatically creates
// 3- Find the component that you want to dispatch from.
// 4- Import the action creator function and 'useDispatch' from react-redux.
// 5- Call the 'useDispatch' hook to get access to the dispatch function.
// 6- When the user does something, call the action creator to get an action, then dispatch it.

// Accessing State
// 1- Find the component that needs to access some state.
// 2- Import the 'useSelector' hook from 'react-redux'.
// 3- Call the hook, passing in a selector function.
// 4- Use the state!  Anytime state changes, the component will automatically rerender.
