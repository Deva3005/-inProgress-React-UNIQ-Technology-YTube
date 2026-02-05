import { createContext, useState } from "react";
import RouterNavbar from "./routeComponents/RouterNavbar";
import RouterHome from "./routeComponents/login/RouterHome";
import RouterAbout from "./routeComponents/login/RouterAbout";
import RouterLogin from "./routeComponents/login/RouterLogin";

import RouteProducts from "./routeComponents/products/RouteProducts";
import RouteProductList from "./routeComponents/products/RouteProductList";
import RouteProductInfo from "./routeComponents/products/RouteProductInfo";

import RouteError from "./routeComponents/RouteError";

import UserParam from "./routeComponents/routeHooks/UserParam";

import { Routes, Route } from "react-router-dom";

export const RouterUser = createContext();
const RoutingRoot = () => {
  const [user, setuser] = useState("Anonymous");
  return (
    <div>
      <RouterUser.Provider value={user}>
        <RouterNavbar />
        <Routes>
          <Route path="/" element={<RouterHome />} />
          <Route path="about" element={<RouterAbout />} />
          <Route path="login" element={<RouterLogin setUser={setuser} />} />
          <Route path="products" element={<RouteProducts />}>
            {/* Nested Routes */}
            <Route path="product-list" element={<RouteProductList />} />
            <Route path="product-info" element={<RouteProductInfo />} />
          </Route>
          <Route path="/user/:id/:name" element={<UserParam />} />
          <Route path="*" element={<RouteError />} />
        </Routes>
      </RouterUser.Provider>
    </div>
  );
};

export default RoutingRoot;
