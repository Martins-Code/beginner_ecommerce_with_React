import React, { useContext } from "react";
import "./shopping.css";
import { ShopContext } from "../../context/Shop-Context-Provider";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p className="product-name">{productName}</p>
        <p className="product-price">${price}</p>
      </div>
      <button onClick={() => addToCart(id)} className="addToCartBttn">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
