"use client";
import { useState } from "react";
import "../style.css";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  const addProduct = async () => {
    if (!name || !price || !color || !company || !category) {
      alert("Please fill out all fields.");
      return;
    }

    let result = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        color,
        company,
        category,
      }),
    });
    result = await result.json();
    if (result.success) {
      alert("Product Added Successfully");
      setName("");
      setPrice("");
      setColor("");
      setCompany("");
      setCategory("");
    }
  };

  return (
    <div>
      <h1 className="title">Add Products</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        className="input"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Product Price"
        className="input"
      />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Product Color"
        className="input"
      />
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Product Company"
        className="input"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Product Category"
        className="input"
      />
      <div className="btn-container">
        <button className="btn" onClick={() => router.push("/")}>
          Back
        </button>
        <button className="btn" onClick={addProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Page;
