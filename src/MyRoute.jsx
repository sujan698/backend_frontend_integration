import React from "react";
import ReadAllProduct from "./Product/ReadAllProduct";
import CreateProduct from "./Product/CreateProduct";
import ReadSpecificProduct from "./Product/ReadSpecificProduct";
import UpdateProduct from "./Product/UpdateProduct";
import { Route, Routes } from "react-router-dom";
import ReadAllUsers from "./users/ReadAllUsers";
import CreateUser from "./users/createUsers";
import ReadSpecificUsers from "./users/ReadSpecificUsers";
import UpdateUsers from "./users/UpdateUsers";

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
          path="/product/update/:id"
          element={<UpdateProduct></UpdateProduct>}
        />

        <Route path="/user" element={<ReadAllUsers />} />
        <Route path="/user/create" element={<CreateUser></CreateUser>} />
        <Route
          path="/user/:id"
          element={<ReadSpecificUsers></ReadSpecificUsers>}
        />
        <Route path="/user/update:id" element={<UpdateUsers></UpdateUsers>} />
      </Routes>
    </div>
  );
};

export default MyRoute;
