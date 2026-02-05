import React from "react";
import { Outlet, Link } from "react-router-dom";

const RouteProducts = () => {
  return (
    <div>
      <div className="d-flex gap-3">
        <button className="btn btn-primary">
          <Link className="text-white text-decoration-none" to={"product-info"}>
            Product-Detail
          </Link>
        </button>
        <button className="btn btn-primary">
          <Link className="text-white text-decoration-none" to={"product-list"}>
            Product-List
          </Link>
        </button>
      </div>
      <div>
        Products
        <Outlet />
      </div>
    </div>
  );
};

export default RouteProducts;
