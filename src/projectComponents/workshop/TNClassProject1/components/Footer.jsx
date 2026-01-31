import React from "react";
import knightImg from "../../../../assets/ClassProjects/knight.webp";
const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-black d-flex justify-content-center ">
        <div className="container p-5 row w-100 d-flex flex-column-reverse flex-lg-row justify-content-around align-items-center">
          <div className="col-5 text-white text-center">
            <h1>To Protect The Order</h1>
            <h2>Here we Stand.</h2>
            <p>
              “A knight does not wield his sword for power; he lifts it to
              protect the weak.”
              <br />– Sir Galahad Trenton.
            </p>
          </div>
          <div className="col-sm-12 col-lg-3">
            <img
              src={knightImg}
              alt="Kins"
              className="rounded"
              width={"100%"}
              style={{ minWidth: "300px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
