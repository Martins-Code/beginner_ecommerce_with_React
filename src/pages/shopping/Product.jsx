import React from "react";
import "./shopping.css";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="discription">
        <b>
          <p>{productName}</p>
        </b>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Product;
