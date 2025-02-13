import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [isMarry, setIsMarry] = useState(false);
  const [gender, setGender] = useState("male");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      password: password,
      age: age,
      isMarry: isMarry,
      gender: gender,
    };
    try {
      let result = await axios({
        method: "post",
        url: "http://localhost:8001/user",
        data: data,
      });
      console.log(result.data.message);
      toast.success(result.data.message);

      setName("");
      setEmail("");
      setPassword("");
      setAge("");
      setIsMarry(false);
      setGender("male");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <h1>User create form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>User Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label>Gender:</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label>Is Marry:</label>
            <input
              type="checkbox"
              checked={isMarry}
              onChange={(e) => setIsMarry(e.target.checked)}
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

export default CreateUser;
