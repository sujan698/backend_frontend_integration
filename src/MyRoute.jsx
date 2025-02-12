import React from "react";
import ReadAllProduct from "./Product/ReadAllProduct";
import CreateProduct from "./Product/CreateProduct";
import ReadSpecificProduct from "./Product/ReadSpecificProduct";
import UpdateProduct from "./Product/UpdateProduct";
import { Route, Routes } from "react-router-dom";

const MyRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/product" element={<ReadAllProduct></ReadAllProduct>} />
        <Route
          path="/product/create"
          element={<CreateProduct></CreateProduct>}
        />
        <Route
          path="/product/:id"
          element={<ReadSpecificProduct></ReadSpecificProduct>}
        />
        <Route
          path="/product/update:id"
          element={<UpdateProduct></UpdateProduct>}
        />
      </Routes>
    </div>
  );
};

export default MyRoute;
