import React, { useContext, useState } from "react";
import { RouterUser } from "../../RoutingRoot";

const RouterLogin = ({ setUser }) => {
  const user = useContext(RouterUser);
  const [login, setlogin] = useState("");
  return (
    <div className="container bg-primary d-flex flex-column justify-content-center align-items-center my-5 py-5 gap-5 rounded-5">
      <input
        className="rounded-5"
        type="text"
        style={{
          fontSize: "32px",
          width: "80vw",
          textAlign: "center",
        }}
        value={login}
        onChange={(e) => {
          setlogin(e.target.value);
        }}
      />
      <button
        className="btn btn-success"
        style={{
          fontSize: "32px",
          width: "30vw",
        }}
        onClick={() => {
          setUser(login);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default RouterLogin;
