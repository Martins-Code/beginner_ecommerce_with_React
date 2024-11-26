import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";

const Shopping = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Buy from MartTech</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shopping;
