"use client";
import { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    let productsList = await fetch("https://dummyjson.com/products");
    productsList = await productsList.json();
    console.log(productsList);
    setProducts(productsList.products);
    console.log(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="container">
      <h2 className="text-center mt-2">Products</h2>
      {products.map((p) => {
        return (
          <div key={p.id}>
            <p>Name : {p.title}</p>
            <p>Price : {p.price}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Products;
