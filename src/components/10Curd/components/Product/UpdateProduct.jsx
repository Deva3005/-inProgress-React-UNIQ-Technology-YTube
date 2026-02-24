import axios from "axios";
import React from "react";
import {
  useNavigate,
  useOutletContext,
  useLocation,
  useParams,
} from "react-router-dom";

const UpdateProduct = () => {
  let location = useLocation();
  const Navigate = useNavigate();
  const { id } = useParams();
  let idx = id;
  const { data, setData, clickData, summary, setClickData } =
    useOutletContext();
  const handleEdit = async (e) => {
    e.preventDefault();
    let response = await axios.put(
      "http://localhost:3000/products/" + id,
      clickData,
    );
    setData(
      data.map((e, ix) => {
        if (e.id == idx) {
          return { ...e, ...clickData, id: ix };
        } else {
          return { ...e, id: ix };
        }
      }),
    );
    Navigate("/product");
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name.includes(".")) {
      name = name.split(".")[1];

      setClickData({
        ...clickData,
        rating: { ...clickData.rating, [name]: value },
      });
    } else {
      setClickData({ ...clickData, [name]: value });
    }
  };
  return (
    <>
      <div>
        <form
          action=""
          className="d-flex flex-column align-items-center p-5 gap-3"
          onSubmit={handleEdit}
        >
          <label htmlFor="">
            <div>Title</div>
            <input
              type="text"
              name="title"
              value={clickData.title}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            <div>Description</div>
            <input
              type="text"
              name="description"
              value={clickData.description}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            <div>Price</div>
            <input
              type="number"
              name="price"
              value={clickData.price}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            <div>Category</div>
            <select
              name="category"
              value={clickData.category}
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
              value={clickData.rating.rate}
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
              value={clickData.rating.count}
              onChange={handleChange}
            />
          </label>
          <button className="btn btn-success">submit</button>
        </form>
      </div>
    </>
  );
};

export default UpdateProduct;
