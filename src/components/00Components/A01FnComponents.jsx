import React from "react";

const A01FnComponents = (props) => {
  // props : properties are data given to child from parent
  // By Default it is empty
  console.log(props);
  /*
  What is Props?
    In React, props are read-only data passed from one component to another. 
    They are immutable, 
    meaning the child component 
    cannot modify the props it receives. 
    Only the parent component can alter the data passed through props
  */
  //   props.name = "Deva"; // Throws error because it is Read Only
  return (
    <div>
      A01FnComponents
      <p>{props.name}</p>
    </div>
  );
};

export default A01FnComponents;
