"use client";
import { useState } from "react";
import "./../style.css";  

const Page = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const addUser = async () => {
    let respone = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age, email, city }),
    });
    respone = await respone.json();
    if (respone.success) {
      alert("User Added Successfully");
    } else {
      alert("Something Went Wrong");
    }
    console.log(respone);
  };

  return (
    <div className="add-user">
      <h1>Add New User</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        value={age}
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        value={city}
        placeholder="Enter City"
        onChange={(e) => setCity(e.target.value)}
        className="input-field"
      />
      <button onClick={addUser} className="btn">
        Add User
      </button>
    </div>
  );
};

export default Page;
