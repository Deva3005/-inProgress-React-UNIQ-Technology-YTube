import PropTypes from "prop-types";
import React from "react";
// Same info is Travelled from Parent to child then to Grand Child
// This is Drilling
// Which is not recommended so Use Context API
const CheckPropGrandChild = ({ name="jack", age, occupation }) => {
  console.log(name, age, occupation);

  return (
    <>
      <h4>Grand is Up</h4>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{age}</td>
          </tr>
          <tr>
            <td>Occupation</td>
            <td>{occupation}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CheckPropGrandChild;

CheckPropGrandChild.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  occupation: PropTypes.string,
};
