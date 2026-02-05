import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserParam = () => {
  const { id, name } = useParams();
  const navi = useNavigate();
  return (
    <div>
      <div className="param mt-5">
        This is useParam HOOKS
        <table className="table-bordered">
          <tbody>
            <tr className="p-3 my-1">
              <th>ID</th>
              <td>{id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="useNavi mt-5">
        This is useNavigate HOOK
        <ul className="nav nav-underline">
          <li>
            <button
              className="nav-link"
              onClick={() => {
                navi("/");
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => {
                navi("/about");
              }}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => {
                navi("/products");
              }}
            >
              Products
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => {
                navi("/login");
              }}
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserParam;
