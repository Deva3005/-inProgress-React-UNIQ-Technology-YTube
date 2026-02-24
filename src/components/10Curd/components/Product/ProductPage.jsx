import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useFetchData from "../../customHooks/useFetchData";
import { Card, Button } from "react-bootstrap";
import getSummary from "../../customHooks/getSummary.js";
import { ProductFetch } from "../../CurdRoot.jsx";
import axios from "axios";

const ProductPage = () => {
  const Navigate = useNavigate();
  const [data, setData] = useFetchData();
  const [summary, setSummary] = useState([]);
  const [clickData, setClickData] = useState("");
  useEffect(() => {
    if (data != undefined) {
      setSummary([...getSummary(data)]);
    }
  }, [data]);

  const handleDelete = (idx) => {
    console.log("indx", idx);
    axios.delete("http://localhost:3000/products/" + idx);
    let x = data.filter((e) => {
      return e.id != idx;
    });
    setData(x);
  };

  const handleEdit = (idx) => {
    console.log("indx", idx);

    let x = data.filter((e) => {
      return e.id == idx;
    })[0];
    console.log(x);
    setClickData(x);
    Navigate("/product/update-product/" + idx);
  };

  return (
    <div>
      <div className="text-center display-3 bg-primary text-white p-2 d-flex flex-column justify-content-center align-items-center">
        ProductPage
        {/* {JSON.stringify(summary)} */}
        <button
          style={{ maxWidth: "300px" }}
          className="btn btn-secondary mt-31"
          onClick={() => {
            Navigate("create-update-product");
          }}
        >
          Create Product
        </button>
      </div>
      <Outlet context={{ data, setData, summary, clickData, setClickData }} />
      <hr />
      <div className="container d-flex flex-wrap gap-3 justify-content-center">
        {data.map((element) => {
          return (
            <Card key={element.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={element.image} />
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>{element.description}</Card.Text>
                <div
                  className="d-flex flex-row gap-3"
                  style={{ minWidth: "400px" }}
                >
                  <Button variant="primary">Add to Cart</Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      handleEdit(element.id);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleDelete(element.id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
