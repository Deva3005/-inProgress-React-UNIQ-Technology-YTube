import { useState, useEffect } from "react";
import axios from "axios";
const useFetchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let FetchData = async () => {
      let response = await axios.get("http://localhost:3000/products");
      console.log(response);
      setData(response.data);
    };
    FetchData();
  }, []);
  return [data, setData];
};

export default useFetchData;
