import React from "react";
import CheckPropChild from "./CheckPropChild";

const CheckPropParent = () => {
  let object1 = {
    // name: 2020,
    age: 28,
    occupation: "wanderer",
  };
  return (
    <>
      <h1>Hello</h1>
      {/* In dev mode things run twices */}
      <CheckPropChild info={object1} />
    </>
  );
};

export default CheckPropParent;
