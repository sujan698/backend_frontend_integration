import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ReadAllProduct = () => {
  let navigate = useNavigate();
  let [products, setProducts] = useState([]);
  const getData = async () => {
    try {
      let result = await axios({
        method: "get",
        url: "http://localhost:8001/product",
      });

      setProducts(result.data.result);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getData();
  });
  return (
    <div>
      <h1>Read All Product</h1>
      <table style={{ border: "2px solid black", marginBottom: "2px" }}>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
        {products.map((product, index) => {
          return (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <button
                onClick={() => {
                  navigate(`/product/${product._id}`);
                }}
              >
                View
              </button>
              <button
                onClick={() => {
                  navigate(`/product/update/${product._id}`);
                }}
              >
                Edit
              </button>
              <button
                onClick={async () => {
                  try {
                    let result = await axios({
                      url: `http://localhost:8001/product/${product._id}`,
                      method: "delete",
                    });
                    toast.success(result.data.message);
                  } catch (error) {
                    toast.error(error.response.data.message);
                  }
                }}
              >
                Delete
              </button>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ReadAllProduct;
