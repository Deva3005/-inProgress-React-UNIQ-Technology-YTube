import React from "react";
import A01FnComponents from "./A01FnComponents";
import A00ClsComponents from "./A00ClsComponents";

const A99CheckRoot = () => {
  let fnName = "Functional Props 1";
  let clsName = "Class Props 1";

  return (
    <>
      <h1>Class Component A00</h1>
      <A00ClsComponents name={clsName} />
      <h1>Functional Component A01</h1>
      <A01FnComponents name={fnName} />
    </>
  );
};

export default A99CheckRoot;
