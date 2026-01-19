import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Content } from "./Content.jsx";
const TodoRoot = () => {
  let name = "dragon for class Components";
  return (
    <>
      {/* Props: properties can sent as value as well as {varaible in obj literal} */}
      <Header name="deva" />
      <Content />
      {/* Props: properties can sent as value as well as {varaible in obj literal} */}
      <Footer name={name} />
    </>
  );
};

export default TodoRoot;
