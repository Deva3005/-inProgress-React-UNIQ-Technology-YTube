import React, { useState } from "react";

const X01Lists = () => {
  let [list, setList] = useState([
    { id: 1, label: "Do Homework", checked: false },
    { id: 2, label: "Have Break", checked: false },
    { id: 3, label: "Chill", checked: true },
  ]);
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {/* Each child in a list should have a unique "key" prop. */}
        {list.map((element) => (
          <li key={"ul1li" + element.id}>
            <div style={{ display: "flex", gap: "30px" }}>
              {element.checked ? (
                <input type="checkbox" checked/>
              ) : (
                <input type="checkbox" />
              )}
              <p>{element.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default X01Lists;
