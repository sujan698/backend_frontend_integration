import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ReadAllUsers = () => {
  let navigate = useNavigate();
  let [users, setUsers] = useState([]);
  const getData = async () => {
    try {
      let result = await axios({
        method: "get",
        url: "http://localhost:8001/user",
      });

      setUsers(result.data.result);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getData();
  });
  return (
    <div>
      <h1>Read All user</h1>
      <table style={{ border: "2px solid black", marginBottom: "2px" }}>
        <tr>
          <th>Users Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Age</th>
          <th>Is Marry</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
        {users.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.age}</td>
              <td>{user.isMarry}</td>
              <td>{user.isMarry ? "Yes" : "No"}</td>
              <button
                onClick={() => {
                  navigate(`/user/${user._id}`);
                }}
              >
                View
              </button>
              <button>Edit</button>
              <button>Delete</button>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ReadAllUsers;
