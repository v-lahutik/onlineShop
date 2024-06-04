import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

function Products() {
  const items = useLoaderData();

  return (
    <>
      <h2 className="font-bold text-2xl pl-3">Featured Products</h2>
      <div className="flex flex-wrap justify-around gap-2 w-11/12 my-5 mx-auto">
        {items.map((item) => (
          <Product {...item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Products;
