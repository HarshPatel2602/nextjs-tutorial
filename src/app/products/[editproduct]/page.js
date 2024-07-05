"use client";
import { useEffect, useState } from "react";
import "../../style.css";
import { useRouter } from "next/navigation";

const Page = (props) => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    let productData = await fetch(
      `http://localhost:3000/api/products/${props.params.editproduct}`
    );
    productData = await productData.json();
    if (productData.success) {
      let result = productData.result;
      setName(result.name);
      setPrice(result.price);
      setColor(result.color);
      setCompany(result.company);
      setCategory(result.category);
    }
  };

  const updateProduct = async () => {
    let data = await fetch(
        `http://localhost:3000/api/products/${props.params.editproduct}`,{
            method:"PUT",
            body:JSON.stringify({name,price,color,company,category}),
        }
      );
      data = await data.json();
      if (data.result){
        alert("Product Updated Successfully");
        router.push("/products");
      }
  }

  return (
    <div>
      <h1 className="title">Update Products</h1>
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
        <button className="btn" onClick={() => router.push("/products")}>
          Back
        </button>
        <button className="btn" onClick={updateProduct}>Update</button>
      </div>
    </div>
  );
};

export default Page;