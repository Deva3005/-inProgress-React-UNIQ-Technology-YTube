import React, { createContext } from "react";
import X02CProductPage from "./X02CProductPage";

export const ProductContext = createContext();
const X01ParentShop = () => {
  let productDetails = {
    name: "X-Men Adamantium Claw",
    price: 1000,
    desc: "Dare to Snare",
  };

  return (
    <>
      <ProductContext.Provider value={productDetails}>
        <h1>X01ParentShop</h1>
        <X02CProductPage />
      </ProductContext.Provider>
    </>
  );
};

export default X01ParentShop;
