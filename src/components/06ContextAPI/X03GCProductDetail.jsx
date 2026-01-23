import React, { useContext } from "react";
import { ProductContext } from "./X01ParentShop";

const X03GCProductDetail = () => {
  let { name, price, desc } = useContext(ProductContext);
  return (
    <>
      <h5>Product Details</h5>
      <ul>
        <li>{name}</li>
        <li>{price}</li>
        <li>{desc}</li>
      </ul>
    </>
  );
};

export default X03GCProductDetail;
