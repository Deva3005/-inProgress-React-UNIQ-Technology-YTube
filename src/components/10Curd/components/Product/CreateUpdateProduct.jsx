import axios from "axios";
import React, { useContext, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { ProductFetch } from "../../CurdRoot";
import useFetchData from "../../customHooks/useFetchData";

const CreateUpdateProduct = () => {
  const Navigate = useNavigate();
  let [data, setData] = useContext(ProductFetch);
  let { summary } = useOutletContext();
  let [newProduct, setNewProduct] = useState({
    title: "",
    price: 0.0,
    description: "",
    category: "",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name.includes(".")) {
      name = name.split(".")[1];

      setNewProduct({
        ...newProduct,
        rating: { ...newProduct.rating, [name]: value },
      });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = async () => {
      let response = await axios.post(
        "http://localhost:3000/products",
        newProduct,
      );
      console.log(response.status);
      setData([...data, response.data]);
      setNewProduct({
        title: "",
        price: 0.0,
        description: "",
        category: "",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
        rating: {
          rate: 0,
          count: 0,
        },
      });
    };
    postData();
    Navigate("/product");
  };

  return (
    <div>
      <form
        action=""
        className="d-flex flex-column align-items-center p-5 gap-3"
        onSubmit={handleSubmit}
      >
        <label htmlFor="">
          <div>Title</div>
          <input
            type="text"
            name="title"
            value={newProduct.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <div>Description</div>
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <div>Price</div>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <div>Category</div>
          <select
            name="category"
            value={newProduct.category}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {summary.map((e, idx) => {
              return (
                <option key={idx} value={e[0]}>
                  {e[0]}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="">
          <div>Rating</div>
          <input
            type="number"
            min={0}
            max={10}
            name="rating.rate"
            value={newProduct.rating.rate}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <div>Count</div>
          <input
            type="number"
            min={0}
            max={1000}
            name="rating.count"
            value={newProduct.rating.count}
            onChange={handleChange}
          />
        </label>
        <button className="btn btn-success">submit</button>
      </form>
    </div>
  );
};

export default CreateUpdateProduct;
