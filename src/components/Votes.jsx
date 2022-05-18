import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialState } from "../store/votes-store";

const Votes = ({ store }) => {
  //subscribe the data from the store using useSelector Hook

  const vote = useSelector((state = initialState) => state.votes);
  const showVotes = useSelector((state = initialState) => state.toggle);

  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleHandler = () => {
    dispatch({ type: "toggle" });
  };

  const incrementBy10 = () => {
    dispatch({ type: "incrementBy10", payload: 10 });
  };

  return (
    <div className="votes">
      {showVotes && <h2>votes: {vote}</h2>}
      {!showVotes && <h2>Press hide/show button to display vote</h2>}

      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={incrementBy10}>increment by 10</button>
      <button onClick={toggleHandler}>hide/show</button>
    </div>
  );
};

export default Votes;
