"use client";

import { useEffect, useState } from "react";
import "./../../../style.css";

const Page = ({ params }) => {
  const id = params.userid;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  console.log(id);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let data = await fetch("http://localhost:3000/api/users/" + id);
    data = await data.json();
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
    setCity(data.result.city);
  };

  const updateUser = async () => {
    let data = await fetch("http://localhost:3000/api/users/" + id, {
      method: "PUT",
      body: JSON.stringify({ name, age, email, city }),
    });
    data = await data.json();
    console.log(data);
    if (data.success) {
      alert("User Updated Successfully");
    } else {
      alert("Something Went Wrong");
    }
  }
  return (
    <div>
      <h1>Update User Details</h1>
      <input
        type="text"
        className="input-field"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="input-field"
        value={age}
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        className="input-field"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className="input-field"
        value={city}
        placeholder="Enter City"
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn" onClick={updateUser}>Update User</button>
    </div>
  );
};

export default Page;
