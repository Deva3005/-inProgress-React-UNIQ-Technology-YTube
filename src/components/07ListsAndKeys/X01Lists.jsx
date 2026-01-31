import React, { useState } from "react";

const X01Lists = () => {
  let [list, setList] = useState([
    { id: 1, label: "Do Homework", checked: false },
    { id: 2, label: "Have Break", checked: false },
    { id: 3, label: "Chill", checked: true },
  ]);
  let [textValue, setTextValue] = useState("");
  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="text-center display-3 mt-5">To Do List</h1>
      <label className="d-flex justify-content-center align-items-center gap-3 my-5">
        <h3>Task</h3>
        <input
          type="text"
          className="p-1"
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
        />
        <button
          className="btn btn-success"
          onClick={() => {
            let ind = list.at(-1).id + 1;
            setList([
              ...list,
              {
                id: ind,
                label: textValue,
                checked: false,
              },
            ]);
          }}
        >
          Save
        </button>
      </label>
      <ul style={{ listStyle: "none" }}>
        {/* Each child in a list should have a unique "key" prop. */}
        {list.map((element) => (
          <li
            key={"ul1li" + element.id}
            className="d-flex justify-content-center align-items-center gap-5 border-3 border-black"
          >
            <div className="col-6">
              <label>
                <input
                  type="checkbox"
                  checked={element.checked}
                  onChange={(e) => {
                    console.log(
                      e,
                      e.target,

                      !e.target.checked,
                    );
                  }}
                />
                &nbsp; &nbsp; &nbsp;
                {element.label}
              </label>
            </div>
            <button className="btn btn-outline-danger" onClick={() => {}}>
              Delete
            </button>
            <button className="btn btn-outline-primary" onClick={() => {}}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default X01Lists;
