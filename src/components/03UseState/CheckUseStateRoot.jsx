import React, { useState } from "react";
import styled from "styled-components";

let MyHeading = styled.h1`
  color: dodgerblue;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

let MyButton = styled.button`
  color: white;
  font-weight: 700;
  font-size: 24px;
  background-color: Mediumseagreen;
  width: 40%;
`;

const CheckUseStateRoot = () => {
  const [count, setcount] = useState(0);
  const [info, setInfo] = useState({ name: "deva", age: 27 });
  return (
    <>
      <MyHeading>Use State!!!</MyHeading>
      <MyHeading>
        {count}
        <MyButton
          // SetState Re_Render the page
          // If is called in Invoked State :: Infinite Re-Render
          // Calling Function Directly cause
          //   onClick={setcount(count + 1)} // Too Many Renders
          onClick={() => {
            // [1]
            // setcount(count + 1);
            // // [2]
            // // Trying Single Click Update thrice
            // setcount(count + 1);
            // setcount(count + 1);
            // Show No Error But Update Once
            // because OnClick function all UI Updates are Batched so It value never Stored its internal

            // To Over the Above
            // Use Functional Updater [react 17] it looks into the current value of the state
            // [3]
            setcount((count) => count + 1);
            setcount((count) => count + 1);
            setcount((count) => count + 1);
            // Expected Output reached | Single click 3 value updated...
          }}
        >
          Inc +
        </MyButton>
        <MyButton
          onClick={() => {
            setcount(count - 1);
          }}
          style={{ backgroundColor: "red" }}
        >
          Decre -
        </MyButton>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td
                onClick={() => {
                  // Functional Updater Run Twice in React [In Scrict Mode]
                  //   👉 This does NOT happen in production
                  setInfo((info) => {
                    console.log("Timer Started.", info.name);
                    // Timeout run twice...
                    setTimeout(() => {
                      // Functional Update run twice...
                      setInfo((info) => {
                        console.log("changed to deva...");
                        return { ...info, name: "deva" };
                      });
                    }, 3000);
                    console.log("changed to dragon...");
                    return { ...info, name: "Dragon" };
                  });
                }}
              >
                {info.name}
              </td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{info.age}</td>
            </tr>
          </tbody>
        </table>
      </MyHeading>
      {/* On Each setState Re-Render the page... */}
      <h1>Glimplse of Conditional Rendering...</h1>
      {count >= 10 ? (
        <p>Unlocked Level 10</p>
      ) : (
        <p>Work hard to reach Level 10</p>
      )}
      {count >= 30 && <p>Level 30 Reached!!!</p>}
    </>
  );
};

export default CheckUseStateRoot;
