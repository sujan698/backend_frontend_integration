import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ReadSpecificProduct = () => {
  let [product, setProduct] = useState("");
  let params = useParams();
  let id = params.id;

  const getData = async () => {
    try {
      let result = await axios({
        method: "GET",
        url: `http://localhost:8000/product/${id}`,
      });
      setProduct(result.data.result);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product Name is {product.name}.</p>
      <p>Product Price is {product.price}.</p>
      <p>Product Description is {product.description}.</p>
    </div>
  );
};

export default ReadSpecificProduct;
