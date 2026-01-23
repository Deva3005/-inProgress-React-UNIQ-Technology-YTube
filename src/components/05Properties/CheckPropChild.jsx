import React from "react";
import CheckPropGrandChild from "./CheckPropGrandChild";
import PropTypes from "prop-types";

const CheckPropChild = ({ info }) => {
  return (
    <>
      <h3>Child is Up</h3>
      <CheckPropGrandChild
        name={info.name}
        age={info.age}
        occupation={info.occupation}
      />
    </>
  );
};

export default CheckPropChild;
