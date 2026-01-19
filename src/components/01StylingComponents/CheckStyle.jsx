import React from "react";
import styles from "./CheckStyle.module.css";
import styled from "styled-components";
const CheckStyle = () => {
  // H2 Style Object...
  // Create Object and Use it in Style Props
  // [1]
  let h2Style = {
    color: "blue",
    padding: "20px",
    border: "2px ridge green",
    borderRadius: "20px",
    textAlign: "center",
  };

  // Component down here
  let StyledButton = styled.button`
    background-color: blue;
    color: white;
    font-weight: 700;
    padding: 15px 20px;
    border: none;
    outline: none;
    border-radius: 32px;
    font-family: monospace;
    font-size: 32px;
  `;
  return (
    <>
      {/* [1] Inline */}
      <h1
        // here style is properties
        // Any data given to component is known as porperties
        // style takes object as parameter...
        style={{
          color: "white",
          backgroundColor: "dodgerblue",
          textAlign: "center",
        }}
      >
        Hello World
      </h1>
      {/* [2] styling via style object */}
      <h2 style={h2Style}>
        {/* [3] styling via module.css */}
        Let's Greet All with &nbsp;
        <span className={styles.hilightSpan}>GreatNess !!!</span>
      </h2>
      <StyledButton>Click</StyledButton>
    </>
  );
};

export default CheckStyle;
