import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: name,
      price: price,
      description: description,
    };
    try {
      let result = await axios({
        method: "post",
        url: "http://localhost:8001/product",
        data: data,
      });
      console.log(result.data.message);
      toast.success(result.data.message);

      setName("");
      setPrice("");
      setDescription("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <h1>Product create form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Product Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Product Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label>Product Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
