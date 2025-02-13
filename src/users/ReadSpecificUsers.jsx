import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ReadSpecificUsers = () => {
  let [user, setUser] = useState("");
  let params = useParams();
  let id = params.id;

  const getData = async () => {
    try {
      let result = await axios({
        method: "GET",
        url: `http://localhost:8001/user/${id}`,
      });
      setUser(result.data.result);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Users Details</h1>
      <p>User Name is {user.name}.</p>
      <p>User Email is {user.email}.</p>
      <p>User Password is {user.password} .</p>
      <p>User Age is {user.age}.</p>
      <p>User married status is {user.isMarry ? "Yes" : "No"}.</p>
      <p>User Gender is {user.gender}.</p>
    </div>
  );
};

export default ReadSpecificUsers;
