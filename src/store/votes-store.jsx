import { configureStore } from "@reduxjs/toolkit";

//initial statee
export const initialState = { votes: 0, toggle: true };

//reducer function accept state and action, and pass it as an arguments
const reducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { votes: state.votes + 1, toggle: state.toggle };
  } else if (action.type === "decrement") {
    return { votes: state.votes - 1, toggle: state.toggle };
  } else if (action.type === "incrementBy10") {
    return { votes: state.votes + action.payload, toggle: state.toggle };
  } else if (action.type === "toggle") {
    return { votes: state.votes, toggle: !state.toggle };
  }
};

// creating a store which except a reducer as an arguments(or pass reducer to store)
const voteStore = configureStore({ reducer });

export default voteStore;
