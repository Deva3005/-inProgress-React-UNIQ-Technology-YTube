import React from "react";
import { Link } from "react-router-dom";
import image from "../../../../assets/react.svg";
const Nav = () => {
  return (
    <div className="container-fluid bg-dark d-flex justify-content-between align-items-center">
      <div>
        <img src={image} className="mx-5" alt="logo" />
      </div>
      <ul className="mx-5 nav nav-underline bg-secondary text-white p-3 d-flex justify-content-center gap-5">
        <li>
          <Link
            className="nav-link text-white"
            style={{ fontSize: "24px" }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav-link text-white"
            style={{ fontSize: "24px" }}
            to="about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="nav-link text-white"
            style={{ fontSize: "24px" }}
            to="product"
          >
            Product
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
