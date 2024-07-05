"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios.get("http://localhost:3000/api/products").then((res) => {
      setProducts(res.data.result);
    });
  };

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:3000/api/products/${id}`)
      .then((res) => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== id)
        );
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
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
              <td>
                <button
                  className="btn1"
                  onClick={() => router.push(`/products/${product._id}`)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn1"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;