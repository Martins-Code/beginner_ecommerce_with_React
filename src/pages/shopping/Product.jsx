import React from "react";
import "./shopping.css";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p className="product-name">{productName}</p>
        <p className="product-price">${price}</p>
      </div>
      <button className="addToCartBttn">Add to Cart</button>
    </div>
  );
};

export default Product;
