import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const CreateUpdateProduct = () => {
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
    console.log(e.target.name);
    console.log(e.target.value);
    let { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <div>
      <form
        action=""
        className="d-flex flex-column align-items-center p-5 gap-3"
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
          />
        </label>
        <label htmlFor="">
          <div>Price</div>
          <input type="number" min={30} name="price" value={newProduct.price} />
        </label>
        <label htmlFor="">
          <div>Category</div>
          <select name="category" value={newProduct.category}>
            <option value=""></option>
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
          />
        </label>
        <button className="btn btn-success">submit</button>
      </form>
    </div>
  );
};

export default CreateUpdateProduct;
