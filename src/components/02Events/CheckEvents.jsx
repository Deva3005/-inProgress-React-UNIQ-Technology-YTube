import React, { useState } from "react";

const CheckEvents = (props) => {
  console.log(props);
  let data = "random 200 words";
  return (
    <div>
      <h1>{props.title}</h1>
      {/* Takeaway DOM Maniplution technique wont work in react arch
          Here data inside the Components are known as STATE

          we use HOOKS to manage the States
          anything that starts with 'use' are known as HOOKS [not only in react but also in redux]
      */}
      <button
        onClick={(e) => {
          console.log(e);
          data = "New Random " + Math.random() * 50 + " words";
          console.log(data);
        }}
      >
        Click to Trigger Function
      </button>
      <p
        onClick={() => {
          console.log(data);
        }}
      >
        This is a sample paragraph...
      </p>
      <p>{data}</p>
    </div>
  );
};

export default CheckEvents;
