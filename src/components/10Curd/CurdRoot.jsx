import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/Home/About";
import Nav from "./components/Home/Nav";
import ProductPage from "./components/Product/ProductPage";
import CreateUpdateProduct from "./components/Product/CreateUpdateProduct";
import { createContext, useContext } from "react";
import useFetchData from "./customHooks/useFetchData.js";
export const ProductFetch = createContext();
const CurdRoot = () => {
  const [data, setData] = useFetchData();

  return (
    <>
      <ProductFetch value={[data, setData]}>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductPage />}>
            <Route
              path="create-update-product"
              element={<CreateUpdateProduct />}
            />
          </Route>
        </Routes>
      </ProductFetch>
    </>
  );
};
export default CurdRoot;
