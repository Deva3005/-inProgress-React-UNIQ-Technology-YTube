import React, { useState } from "react";

const State = () => {
  const [onOff, setOnOff] = useState(true);
  const [color, setColor] = useState("MediumSeaGreen");
  const [blur, setBlur] = useState(50);
  return (
    <>
      <div
        className="cotainer"
        style={{
          backgroundColor: color,
          opacity: blur,
          padding: "30px",
          width: "50%",
          justifySelf: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          borderRadius: "20px",
        }}
      >
        <h1>Card is Great {onOff}</h1>
        <h3>ON / OFF</h3>
        <button
          style={{
            width: "20%",
            justifySelf: "center",
            alignSelf: "center",
            padding: "15px",
            fontSize: "22px",
            borderRadius: "20px",
          }}
          onClick={() => {
            console.log(onOff);
            setOnOff(!onOff);
          }}
        >
          Toggle
        </button>
        {onOff ? (
          <div>
            <label htmlFor="colorCard">
              <h1>Color</h1>
              <input
                type="color"
                name="color"
                id="colorCard"
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </label>
            <br />
            <label htmlFor="blur">
              <h1>Blur Value {blur}</h1>
              <input
                type="range"
                name="blur"
                id="blur"
                value={100}
                min={50}
                max={100}
                onChange={(e) => {
                  setBlur(e.target.value / 100);
                }}
              />
            </label>
          </div>
        ) : (
          <h3>Toggle ON !</h3>
        )}
      </div>
    </>
  );
};

export default State;
