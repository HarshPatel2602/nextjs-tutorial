"use client"

import axios from "axios";
import { useEffect, useState } from "react";


const Page = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
   axios.get("http://localhost:3000/api/products").then((res) => {
    setProducts(res.data.result)
    });
};

useEffect(()=>{
  getProducts();
},[])
  return (
    <div>
      <h1>Product List</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Color</td>
            <td>Company</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.color}</td>
              <td>{product.company}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
