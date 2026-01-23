import React, { useState } from "react";

const CheckCondiRenders = ({ currentState }) => {
  const [loggedIn, setLogged] = useState(true);

  // Conditional Rendering with IF-ELSE [Nested Components]
  let message;

  const [count, setcount] = useState(0);

  if (count < 10) {
    message = <p>Click {10 - count} to UnLock Rewards</p>;
  } else if (count === 10) {
    message = <p>Congrats You Unlocked 10% dicounts</p>;
  } else if (count > 10 && count < 20) {
    message = <p>Click More to Unlock Ohter Rewards</p>;
  } else if (count >= 20) {
    message = (
      <p>Congrats, Top Reward Unlocked... & You're Renowned Click Master...</p>
    );
  } else {
    message = <p>Error</p>;
  }

  // Nested Components [Loading...]
  function Loading() {
    return <h3>Things are Loaded 🍃</h3>;
  }

  function Success() {
    return <h3>Things are Success ✅</h3>;
  }

  function Warning() {
    return <h3>Things are Warning ⚠️</h3>;
  }

  let response;
  // SWITCH case [Conditional Re-Render]
  switch (currentState) {
    case "Loading":
      response = <Loading />;
      break;
    case "Success":
      response = <Success />;
      break;
    case "Warning":
      response = <Warning />;
      break;
    default:
      console.log("Check Some Error");
      break;
  }

  return (
    <>
      {/* [1] Conditional Rendering with Ternary Operators */}
      <p>{loggedIn ? "Welcome" : "Kindly Log In"}</p>
      <button
        onClick={() => {
          setLogged((prev) => !prev);
        }}
      >
        {loggedIn ? "Log Out" : "Log In"}
      </button>

      {/* [2] Conditional Rendering with And Operator */}
      <p>{loggedIn && "Deva Youre seeing this because Logged is True"}</p>

      {/* [3] Conditional Via IF-ELSE block outside Fragments [Using Nested Components] */}
      <h3>{count}</h3>
      <button
        onClick={() => {
          setcount((p) => p + 1);
        }}
      >
        Count Increament
      </button>
      <h4>{message}</h4>

      {/* [4] Conditional Via Switch Case... */}
      {response}
    </>
  );
};

export default CheckCondiRenders;
