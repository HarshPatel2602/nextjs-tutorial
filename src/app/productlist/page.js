// Call API in Server Component

import Product from "./product";
const productList = async () => {
  let data = await fetch("https://dummyapi.online/api/pokemon");
  data = await data.json();
  return data;
};

export default async function Page() {
  const products = await productList();
  //   console.log(products);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((item) => (
        <div key={item.id}>
          <h1>Pokemon : {item.pokemon}</h1>
          <h2>Type : {item.type}</h2>
          <h3>Abilities : {item.abilities}</h3>
          <h4>Hitpoints : {item.hitpoints}</h4>

          <Product location={item.location} />
        </div>
      ))}
    </div>
  );
}

// Call API in Client Component

// "use client";
// import { useEffect, useState } from "react";

// export default function Page() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         let data = await fetch("https://dummyapi.online/api/pokemon");
//         data = await data.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>
//       {products.map((item) => (
//         <div key={item.id}>
//           <h1>Pokemon : {item.pokemon}</h1>
//           <h2>Type : {item.type}</h2>
//           <h3>Abilities : {item.abilities}</h3>
//           <h4>Hitpoints : {item.hitpoints}</h4>
//         </div>
//       ))}
//     </div>
//   );
// }
