import React, { useContext } from "react";
import "./shopping.css";
import { ShopContext } from "../../context/Shop-Context-Provider";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p className="product-name">{productName}</p>
        <p className="product-price">${price}</p>
      </div>
      <button onClick={() => addToCart(id)} className="addToCartBttn">
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
