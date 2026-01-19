import React from "react";

const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1>ToDo Application</h1>
      <p>Simple React App</p>
      <p>user: {props.name}</p>
    </>
  );
};

export default Header;
